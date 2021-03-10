package ru.baikal.ismu.conf.conf.controller;

import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import ru.baikal.ismu.conf.conf.domain.*;
import ru.baikal.ismu.conf.conf.repos.DeskRepo;
import ru.baikal.ismu.conf.conf.repos.NotificationRepo;
import ru.baikal.ismu.conf.conf.repos.TezisRepo;
import ru.baikal.ismu.conf.conf.repos.UserRepo;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/ticket")
public class TicketsRestController {
    @Autowired
    TezisRepo tezisRepo;
    @Autowired
    DeskRepo deskRepo;
    @Autowired
    NotificationRepo notificationRepo;
    @Autowired
    UserRepo userRepo;

    @GetMapping
    @JsonView(UserView.ForUserList.class)
    public List<Tezis> tezisList(@AuthenticationPrincipal User user){
        if (user.getRoles().contains(Roles.ADMIN)){
            return tezisRepo.findAllByTezisStatus(0);
        } else  if (user.getRoles().contains(Roles.MODERATOR)){

            List<Desk> deskList =deskRepo.findByModeratorId(user.getId());
            List<Long> deskIds =new ArrayList<>();
            for (int i = 0; i < deskList.size() ; i++) {
                deskIds.add(deskList.get(i).getId());
                }
            if (deskIds.size()>0) {

                return tezisRepo.findAllByTezisStatusAndDeskIdIn(0, deskIds);
            } else return null;

        } else return  null;
    }


    @PutMapping("{id}")
    @JsonView(UserView.ForUserList.class)
    public Tezis update(@PathVariable("id") Tezis tezisFromDb,
                        @RequestBody Tezis tezis,
                        @AuthenticationPrincipal User user,
                        Notification notification){
        Boolean isEdited=false;

        if (user.getRoles().contains(Roles.ADMIN)){
            isEdited = true;

            //return tezisRepo.save(tezisFromDb);
        } else if(user.getRoles().contains(Roles.MODERATOR)){
            List<Desk> deskOfUser = deskRepo.findByModeratorId(user.getId());
            Boolean deskIdIsExist = false;

            for (int i = 0; i <deskOfUser.size() ; i++) {
                if (tezisFromDb.getDeskId()==deskOfUser.get(i).getId())  deskIdIsExist = true;
            }
                if(deskIdIsExist) {
                    isEdited = true;
                }


        }
        if (isEdited){
            BeanUtils.copyProperties(tezis,tezisFromDb,"id","tezisModeratorId", "tezisAddDate","tezisChangeStatusDate");
            tezisFromDb.setTezisChangeStatusDate(LocalDateTime.now());
            tezisFromDb.setTezisModeratorId(user.getId());

            if (userRepo.findById(tezisFromDb.getAuthorId()).isPresent()) {
                User author = userRepo.findById(tezisFromDb.getAuthorId()).get();

                String ticketStatus = " ";
                if (tezisFromDb.getTezisStatus() == 1) {
                    ticketStatus = "ОДОБРЕНА.";
                } else if (tezisFromDb.getTezisStatus() == 2) ticketStatus = "ОТКЛОНЕНА.";

                if (author.getNotificationAgree().equals(1)) {
                    notification.setNotificationRecipient(author.getUserEmail());
                    notification.setNotificationSubject("Изменение статуса заявки");
                    notification.setNotificationBody(
                            "Здравствуйте," + author.getLastname() + " " + author.getFirstname() + " " + author.getSecname() + "! \n" +
                                    "Ваша заявка была рассмотрена " + tezisFromDb.getTezisChangeStatusDate() + " по Иркутскому времени (GMT +8).\n" +
                                    "Статус заявки - " + ticketStatus +

                                    "\n \n Это письмо было отправленно Вам, так как адрес " + author.getUserEmail() + " был указан при регистрации на https://conference.ismu.baikal.ru" + " " +
                                    "\n \n Для отказа от получения уведомлений перейдите по ССЫЛКЕ: https://conference.ismu.baikal.ru/unsubscribe/" + author.getNotificationUUID());
                    notification.setCreateNotificationDateTime(LocalDateTime.now());
                    notification.setNotificationStatus(0);
                    notification.setSourceId(user.getId());
                    notification.setUnsubscribeUUID(author.getNotificationUUID());
                    notificationRepo.save(notification);
                }
            }
            return tezisRepo.save(tezisFromDb);

        } else return null;

    }

}
