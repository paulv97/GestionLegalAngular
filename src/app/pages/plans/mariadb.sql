create TABLE IF NOT EXISTS testtable (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) 

INSERT INTO testtable (name) VALUES ('test1');
INSERT INTO testtable (name) VALUES ('test2');
INSERT INTO testtable (name) VALUES ('test3');

select * from testtable;


-- table that stores the migration history
CREATE TABLE IF NOT EXISTS `flyway_schema_history` (
  `installed_rank` int(11) NOT NULL,
  `version` varchar(50) DEFAULT NULL,
--   `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int(11) DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int(11) NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `flyway_schema_history_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- -- insert the initial migration


-- table that stores the earnings trough the year
CREATE TABLE IF NOT EXISTS `earnings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL,
  `earnings` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO earnings (year, earnings) VALUES (2018, 1000);
INSERT INTO earnings (year, earnings) VALUES (2019, 2000);
INSERT INTO earnings (year, earnings) VALUES (2020, 3000);
INSERT INTO earnings (year, earnings) VALUES (2021, 4000);
INSERT INTO earnings (year, earnings) VALUES (2022, 5000);
INSERT INTO earnings (year, earnings) VALUES (2023, 6000);
INSERT INTO earnings (year, earnings) VALUES (2024, 7000);
INSERT INTO earnings (year, earnings) VALUES (2025, 8000);
INSERT INTO earnings (year, earnings) VALUES (2026, 9000);
INSERT INTO earnings (year, earnings) VALUES (2027, 10000);

SELECT * FROM earnings;
