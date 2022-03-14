/*
 Navicat Premium Data Transfer

 Source Server         : cynthia
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : 112.124.108.238:3306
 Source Schema         : gift

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 14/03/2022 21:28:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for advice
-- ----------------------------
DROP TABLE IF EXISTS `advice`;
CREATE TABLE `advice`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `advice` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for answer
-- ----------------------------
DROP TABLE IF EXISTS `answer`;
CREATE TABLE `answer`  (
  `id` int(11) NULL DEFAULT NULL,
  `answer` varchar(1000) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `time` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `num` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`num`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `words` varchar(5000) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `author` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `time` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `title` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_520_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for bdcomment
-- ----------------------------
DROP TABLE IF EXISTS `bdcomment`;
CREATE TABLE `bdcomment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `time` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for bdfcomment
-- ----------------------------
DROP TABLE IF EXISTS `bdfcomment`;
CREATE TABLE `bdfcomment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `comment` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `time` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for communciate
-- ----------------------------
DROP TABLE IF EXISTS `communciate`;
CREATE TABLE `communciate`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `time` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for done
-- ----------------------------
DROP TABLE IF EXISTS `done`;
CREATE TABLE `done`  (
  `id` int(11) NULL DEFAULT NULL,
  `things` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `time` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `describe` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  `play` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`play`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for things
-- ----------------------------
DROP TABLE IF EXISTS `things`;
CREATE TABLE `things`  (
  `id` int(11) NULL DEFAULT NULL,
  `things` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
