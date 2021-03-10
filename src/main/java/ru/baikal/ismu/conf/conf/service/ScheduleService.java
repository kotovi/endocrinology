package ru.baikal.ismu.conf.conf.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ru.baikal.ismu.conf.conf.domain.Notification;
import ru.baikal.ismu.conf.conf.domain.User;
import ru.baikal.ismu.conf.conf.repos.NotificationRepo;
import ru.baikal.ismu.conf.conf.repos.UserRepo;
import ru.baikal.ismu.conf.conf.repos.UserWithoutTezisRepo;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Component
public class ScheduleService {
    @Autowired
    NotificationRepo notificationRepo;
    @Autowired
    MailSender mailSender;
    @Autowired
    UserRepo userRepo;

    @Autowired
    UserWithoutTezisRepo userWithoutTezisRepo;

/*

    @Scheduled(fixedRate = 20000)
    public void mailNotificator(){
        //рассылаем уведомления
        List<Notification> notification = notificationRepo.findByNotificationStatus(0);

        // for (int i=0; i < notification.size(); i++) {
        //     mailSender.send(notification.get(i).getNotificationRecipient(),notification.get(i).getNotificationSubject(),
        //             notification.get(i).getNotificationBody());
        //     notification.get(i).setNotificationStatus(1);
        //     notification.get(i).setCompliteNotificationDateTime(LocalDateTime.now());
        //     if (notification.get(i).getNotificationType()==0) notification.get(i).setNotificationBody("учетные данные отправлены");
        //     notificationRepo.save(notification.get(i));

        // }
        String unsubscribeUUID = "";
        if (notification.size() > 0) {

        }
            try {
                Optional<User> user = userRepo.findById(notification.get(0).getSourceId());
                if (user.isPresent()) {
                    unsubscribeUUID = user.get().getNotificationUUID();
                }
            } catch ( Exception e) {
                e.printStackTrace();
            }
            mailSender.send(notification.get(0).getNotificationRecipient(),notification.get(0).getNotificationSubject(),
                    notification.get(0).getNotificationBody(), "https://conference.ismu.baikal.ru/unsubscribe/"+ unsubscribeUUID);
            notification.get(0).setNotificationStatus(1);
            notification.get(0).setCompliteNotificationDateTime(LocalDateTime.now());
           // notification.get(0).setNotificationBody("учетные данные отправлены");
            notificationRepo.save(notification.get(0));

        }
*/

    }


