package ru.baikal.ismu.conf.conf.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import ru.baikal.ismu.conf.conf.domain.Desk;
import ru.baikal.ismu.conf.conf.domain.Roles;
import ru.baikal.ismu.conf.conf.domain.Tezis;
import ru.baikal.ismu.conf.conf.domain.User;
import ru.baikal.ismu.conf.conf.repos.DeskRepo;
import ru.baikal.ismu.conf.conf.repos.TezisRepo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/rejectedTickets")
public class RejectedTicketsRestController {

    @Autowired
    TezisRepo tezisRepo;
    @Autowired
    DeskRepo deskRepo;

    @GetMapping
    @JsonView(UserView.ForUserList.class)
    public List<Tezis> tezisList(@AuthenticationPrincipal User user){
        if (user.getRoles().contains(Roles.ADMIN)){
            return tezisRepo.findAllByTezisStatus(2);
        } else  if (user.getRoles().contains(Roles.MODERATOR)){

            List<Desk> deskList =deskRepo.findByModeratorId(user.getId());
            List<Long> deskIds =new ArrayList<>();
            for (int i = 0; i < deskList.size() ; i++) {
                deskIds.add(deskList.get(i).getId());
            }
            if (deskIds.size()>0) {
                return tezisRepo.findAllByTezisStatusAndDeskIdIn(2, deskIds);
            } else return null;

        } else return  null;
    }


    @PutMapping("{id}")
    @JsonView(UserView.ForUserList.class)
    public Tezis update(@PathVariable("id") Tezis tezisFromDb,
                        @RequestBody Tezis tezis,
                        @AuthenticationPrincipal User user){

        if (user.getRoles().contains(Roles.ADMIN)){
            BeanUtils.copyProperties(tezis,tezisFromDb,"id","tezisModeratorId", "tezisAddDate","tezisChangeStatusDate");
            tezisFromDb.setTezisChangeStatusDate(LocalDateTime.now());
            tezisFromDb.setTezisModeratorId(user.getId());
            return tezisRepo.save(tezisFromDb);

        } else if(user.getRoles().contains(Roles.MODERATOR)){
            List<Desk> deskOfUser = deskRepo.findByModeratorId(user.getId());
            Boolean deskIdIsExist = false;
            for (int i = 0; i <deskOfUser.size() ; i++) {
                if (tezisFromDb.getDeskId()==deskOfUser.get(i).getId())  deskIdIsExist = true;
            }
            if(deskIdIsExist) {
                tezisFromDb.setTezisChangeStatusDate(LocalDateTime.now());
                tezisFromDb.setTezisModeratorId(user.getId());
                return tezisRepo.save(tezisFromDb);
            } else return null;


        } else return null;

    }

}

