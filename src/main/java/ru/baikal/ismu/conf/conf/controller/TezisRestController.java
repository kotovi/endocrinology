package ru.baikal.ismu.conf.conf.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import ru.baikal.ismu.conf.conf.domain.Roles;
import ru.baikal.ismu.conf.conf.domain.Tezis;
import ru.baikal.ismu.conf.conf.domain.User;
import ru.baikal.ismu.conf.conf.repos.DeskRepo;
import ru.baikal.ismu.conf.conf.repos.TezisRepo;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/tezises")
@JsonView(UserView.ForUserList.class)
public class TezisRestController {
    @Autowired
    private TezisRepo tezisRepo;
    @Autowired
    private DeskRepo deskRepo;

    @GetMapping
    @JsonView(UserView.ForUserList.class)
    public List<Tezis> tezisList(@AuthenticationPrincipal User user){
       // if (user.getRoles().contains(Roles.ADMIN)){
        //    return tezisRepo.findAll();
       // }else
            return tezisRepo.findByAuthorId(user.getId());
    }
    @GetMapping("{id}")
    public List<Tezis> list(@AuthenticationPrincipal User user){
        if (user.getRoles().contains(Roles.ADMIN)){
            return tezisRepo.findAll();
        } else  return null;
    }

    @PostMapping
    public Tezis create(@RequestBody Tezis tezis,
                        @AuthenticationPrincipal User user){
        if (user.getRoles().contains(Roles.USER)){
            tezis.setTezisAddDate(LocalDateTime.now());
            tezis.setAuthorId(user.getId());
            tezis.setTezisStatus(0);
            return tezisRepo.save(tezis);
        } else return null;
    }
    @PutMapping("{id}")
    public Tezis update(@PathVariable("id") Tezis tezisFromDb,
                        @RequestBody Tezis tezis,
                        @AuthenticationPrincipal User user){
        if(user.getId().equals(tezisFromDb.getAuthorId() ) || ((user.getRoles().contains(Roles.MODERATOR))&&
                (deskRepo.findByModeratorIdAndId(user.getId(),tezis.getDeskId())!=null )) ||
                (user.getRoles().contains(Roles.ADMIN))){
            System.out.println("Редактируем тезис");
            BeanUtils.copyProperties(tezis,tezisFromDb,"id", "authorId","tezisStatus","tezisModeratorId", "tezisAddDate","tezisChangeStatusDate", "filename", "randomFileName");
            tezisFromDb.setAuthorId(user.getId());
            return tezisRepo.save(tezisFromDb);
        }
        else {
            System.out.println((user.getId().equals(tezisFromDb.getAuthorId() ) || ((user.getRoles().contains(Roles.MODERATOR))&&
                    (deskRepo.findByModeratorIdAndId(user.getId(),tezis.getDeskId())!=null )) ||
                    (user.getRoles().contains(Roles.ADMIN))));

            System.out.println(user.getId().equals(tezisFromDb.getAuthorId() ));

            System.out.println(((user.getRoles().contains(Roles.MODERATOR))&&
                    (deskRepo.findByModeratorIdAndId(user.getId(),tezis.getDeskId())!=null )));
            System.out.println((user.getRoles().contains(Roles.ADMIN)));

            System.out.println("user.getId(): " + user.getId());
            System.out.println("tezisFromDb.getAuthorId(): " + tezisFromDb.getAuthorId());
            System.out.println("редактирование не разрешено");
            return null;}
    }
    @DeleteMapping("{id}")
    public void  delete(@PathVariable("id") Tezis tezis,
                        @AuthenticationPrincipal User user){
        if((user.getRoles().contains(Roles.ADMIN)) || (tezis.getAuthorId().equals(user.getId()))){
            tezisRepo.delete(tezis);
        }
    }
}
