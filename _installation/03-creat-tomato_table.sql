CREATE TABLE IF NOT EXISTS `tomer`.`tomato` (
  `toma_id` int(11) NOT NULL AUTO_INCREMENT , 
  `user_id` int(11) NOT NULL ,
  `toma_time` varchar(64) NOT NULL, 
  `toma_status` boolean NOT NULL,
  -- `user_password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  -- `user_email` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT,
  PRIMARY KEY (`toma_id`),
  -- CREATE INDEX id_index USING HASH ON `tomato` (`user_id`),
  -- UNIQUE KEY `user_name` (`user_name`),
  -- UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user data';

CREATE INDEX id_index USING HASH ON `tomato` (`user_id`)