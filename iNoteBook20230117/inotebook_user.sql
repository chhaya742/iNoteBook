CREATE DATABASE  IF NOT EXISTS `inotebook` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inotebook`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: inotebook
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Age` int NOT NULL,
  `Email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `Pin` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Address` varchar(255) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email_unique` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rohit',NULL,22,'rohit8142@gmail.com','rohit@123','34354656','male',3435,'2022-12-14 15:33:28','2022-12-14 15:33:28',NULL,NULL),(18,'chhaya',NULL,22,'chhayabagwan@gmail.com','chhaya@123','34354656','female',3435,'2022-12-15 11:06:13','2022-12-15 11:06:13',NULL,NULL),(25,'neha',NULL,22,'neha33@gmail.com','Neha@123','9876545676','female',3785,'2022-12-15 11:14:15','2022-12-15 11:14:15',NULL,NULL),(27,'nikhil',NULL,22,'nikhilmalviya@gmail.com','Nikhil@123','7645945934','male',3734,'2022-12-15 11:54:43','2022-12-15 11:54:43',NULL,NULL),(29,'rahul',NULL,22,'rahulkumar@gmail.com','Rahul@123','7895678565','male',3734,'2022-12-15 11:55:28','2022-12-15 11:55:28',NULL,NULL),(30,'sourabh',NULL,23,'sourabh23@gmail.com','Sourabh@123','7654567897','male',45656,'2022-12-21 12:56:15','2022-12-21 12:56:15',NULL,NULL),(31,'chhaya',NULL,34,'neha@gmail.com','Neha@123','7654567897','male',45656,'2022-12-21 13:10:59','2022-12-21 13:10:59',NULL,NULL),(33,'chhaya',NULL,23,'nehatutyu@gmail.com','Neha@123','7654567897','female',45656,'2022-12-21 14:14:48','2022-12-21 14:14:48',NULL,NULL),(34,'Prem',NULL,17,'Prem123@gmail.com','Prem@123','9876789876','Male',45656,'2022-12-23 14:09:42','2022-12-23 14:09:42',NULL,NULL),(35,'Prem Parmar',NULL,17,'Prem234@gmail.com','Prem@123','7654567897','male',45656,'2022-12-23 14:14:06','2022-12-23 14:14:06','ahmdabad ',NULL),(37,'subh','patel111',23,'subh@gmail.com','Neha@123','7654567897','male',45656,'2022-12-26 17:35:21','2022-12-26 17:35:21','ahmdabad ',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-17 10:29:34
