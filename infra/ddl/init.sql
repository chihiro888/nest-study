CREATE TABLE IF NOT EXISTS _user(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT '番号',
  `account` VARCHAR(255) COMMENT 'アカウント',
  `password` VARCHAR(255) COMMENT 'パスワード',
  `username` VARCHAR(255) COMMENT 'ユーサー名',
  `gender` VARCHAR(30) COMMENT '性別',
  `created_at` DATETIME DEFAULT now() COMMENT '作成日付',
  `updated_at` DATETIME DEFAULT NULL COMMENT '修正日付',
  `deleted_at` DATETIME DEFAULT NULL COMMENT '削除日付'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="ユーサー";
