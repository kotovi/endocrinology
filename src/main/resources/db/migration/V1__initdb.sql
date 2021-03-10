-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Мар 03 2021 г., 06:29
-- Версия сервера: 10.3.17-MariaDB
-- Версия PHP: 7.2.11

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `endocrinology`
--

-- --------------------------------------------------------

--
-- Структура таблицы `desk`
--

CREATE TABLE `desk` (
  `id` bigint(20) NOT NULL,
  `desk_description` varchar(255) DEFAULT NULL,
  `desk_name` varchar(255) DEFAULT NULL,
  `moderator_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1),
(1);

-- --------------------------------------------------------

--
-- Структура таблицы `notification`
--

CREATE TABLE `notification` (
  `id` bigint(20) NOT NULL,
  `complite_notification_date_time` datetime DEFAULT NULL,
  `create_notification_date_time` datetime DEFAULT NULL,
  `notification_body` varchar(1000) DEFAULT NULL,
  `notification_recipient` varchar(255) DEFAULT NULL,
  `notification_status` int(11) DEFAULT NULL,
  `notification_subject` varchar(1000) DEFAULT NULL,
  `source_id` bigint(20) DEFAULT NULL,
  `unsubscribeuuid` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `reports`
--

CREATE TABLE `reports` (
  `id` bigint(20) NOT NULL,
  `report_annotation` varchar(255) DEFAULT NULL,
  `report_status` int(11) DEFAULT NULL,
  `report_theme` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `tezis`
--

CREATE TABLE `tezis` (
  `id` bigint(20) NOT NULL,
  `author_id` bigint(20) DEFAULT NULL,
  `desk_id` bigint(20) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `random_file_name` varchar(255) DEFAULT NULL,
  `tezis_add_date` datetime DEFAULT NULL,
  `tezis_annotation` varchar(1000) DEFAULT NULL,
  `tezis_change_status_date` datetime DEFAULT NULL,
  `tezis_moderator_id` bigint(20) DEFAULT NULL,
  `tezis_name` varchar(255) DEFAULT NULL,
  `tezis_status` int(11) DEFAULT NULL,
  `tezis_type` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `roles` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `usr`
--

CREATE TABLE `usr` (
  `id` bigint(20) NOT NULL,
  `active` bit(1) DEFAULT NULL,
  `degree` varchar(1000) DEFAULT NULL,
  `delete_date` datetime DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `notification_agree` int(11) DEFAULT NULL,
  `notificationuuid` varchar(255) DEFAULT NULL,
  `organization` varchar(1000) DEFAULT NULL,
  `organization_post_address` varchar(1000) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_request_date` datetime DEFAULT NULL,
  `passworduuid` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `registration_date` datetime DEFAULT NULL,
  `secname` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_role` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `who_deleted` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `desk`
--
ALTER TABLE `desk`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tezis`
--
ALTER TABLE `tezis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcedmqvwk5wsa1dns5oq22ky56` (`author_id`);

--
-- Индексы таблицы `user_roles`
--
ALTER TABLE `user_roles`
  ADD KEY `FKg6agnwreityp2vf23bm2jgjm3` (`user_id`);

--
-- Индексы таблицы `usr`
--
ALTER TABLE `usr`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `desk`
--
ALTER TABLE `desk`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tezis`
--
ALTER TABLE `tezis`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `usr`
--
ALTER TABLE `usr`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
SET FOREIGN_KEY_CHECKS=1;


CREATE TABLE `SPRING_SESSION` (
                                  `PRIMARY_ID` char(36) COLLATE utf8_bin NOT NULL,
                                  `SESSION_ID` char(36) COLLATE utf8_bin NOT NULL,
                                  `CREATION_TIME` bigint(20) NOT NULL,
                                  `LAST_ACCESS_TIME` bigint(20) NOT NULL,
                                  `MAX_INACTIVE_INTERVAL` int(11) NOT NULL,
                                  `EXPIRY_TIME` bigint(20) NOT NULL,
                                  `PRINCIPAL_NAME` varchar(100) COLLATE utf8_bin DEFAULT NULL,
                                  PRIMARY KEY (`PRIMARY_ID`),
                                  UNIQUE KEY `SPRING_SESSION_IX1` (`SESSION_ID`),
                                  KEY `SPRING_SESSION_IX2` (`EXPIRY_TIME`),
                                  KEY `SPRING_SESSION_IX3` (`PRINCIPAL_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

CREATE TABLE `SPRING_SESSION_ATTRIBUTES` (
                                             `SESSION_PRIMARY_ID` char(36) COLLATE utf8_bin NOT NULL,
                                             `ATTRIBUTE_NAME` varchar(200) COLLATE utf8_bin NOT NULL,
                                             `ATTRIBUTE_BYTES` blob NOT NULL,
                                             PRIMARY KEY (`SESSION_PRIMARY_ID`,`ATTRIBUTE_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
