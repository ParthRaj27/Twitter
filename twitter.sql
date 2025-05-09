-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 09, 2025 at 03:03 PM
-- Server version: 8.0.42-0ubuntu0.20.04.1
-- PHP Version: 7.4.3-4ubuntu2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `twitter`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int NOT NULL,
  `message_from` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `message_to` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` varchar(255) NOT NULL DEFAULT 'not updated',
  `is_deleted` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `message_from`, `message_to`, `message`, `created_at`, `updated_at`, `is_deleted`) VALUES
(1, 'admin@gmail.com', '2', 'hey', '2025-05-08 09:24:38', 'not updated', 0),
(2, 'chishia@gmail.com', '1', 'hello', '2025-05-08 09:24:42', 'not updated', 0),
(3, 'chishia@gmail.com', '1', 'hey', '2025-05-08 09:24:46', 'not updated', 0),
(4, 'chishia@gmail.com', '1', 'abcs', '2025-05-08 09:24:55', 'not updated', 0),
(5, 'admin@gmail.com', '2', 'hi buddy', '2025-05-08 09:38:01', 'not updated', 0),
(6, 'chishia@gmail.com', '1', 'hello', '2025-05-08 09:38:05', 'not updated', 0),
(7, 'admin@gmail.com', '2', 'hey', '2025-05-08 09:38:07', 'not updated', 0),
(8, 'admin@gmail.com', '2', 'sui ja', '2025-05-08 09:38:13', 'not updated', 0),
(9, 'chishia@gmail.com', '1', 'hey', '2025-05-08 09:40:02', 'not updated', 0),
(10, 'chishia@gmail.com', '1', 'hey', '2025-05-08 09:40:28', 'not updated', 0),
(11, 'admin@gmail.com', '2', 'hi', '2025-05-08 09:40:58', 'not updated', 0),
(12, 'chishia@gmail.com', '1', 'hey', '2025-05-08 09:41:00', 'not updated', 0),
(13, 'admin@gmail.com', '2', 'oho', '2025-05-08 09:41:04', 'not updated', 0),
(14, 'chishia@gmail.com', '1', 'km pan!!', '2025-05-08 09:41:16', 'not updated', 0),
(15, 'admin@gmail.com', '2', 'bs mari marji', '2025-05-08 09:41:24', 'not updated', 0),
(16, 'chishia@gmail.com', '1', 'hey', '2025-05-08 09:42:36', 'not updated', 0),
(17, 'chishia@gmail.com', '1', 'hey', '2025-05-08 09:44:29', 'not updated', 0),
(18, 'chishia@gmail.com', '1', 'abc', '2025-05-08 09:44:48', 'not updated', 0),
(19, 'chishia@gmail.com', '1', 'hey', '2025-05-08 09:45:04', 'not updated', 0),
(20, 'admin@gmail.com', '2', '4', '2025-05-08 09:45:05', 'not updated', 0),
(21, 'admin@gmail.com', '2', 'ha ha', '2025-05-08 09:45:09', 'not updated', 0),
(22, 'chishia@gmail.com', '1', 'asda', '2025-05-08 09:45:09', 'not updated', 0),
(23, 'chishia@gmail.com', '1', 'asdadsa', '2025-05-08 09:45:12', 'not updated', 0),
(24, 'admin@gmail.com', '2', 'be ifiehiheifhihiefhihei', '2025-05-08 09:45:20', 'not updated', 0),
(25, 'admin@gmail.com', '2', 'hey', '2025-05-08 10:22:49', 'not updated', 0),
(26, 'chishia@gmail.com', '1', 'hey', '2025-05-08 11:35:31', 'not updated', 0),
(27, 'chishia@gmail.com', '1', 'hwo are you?', '2025-05-08 11:35:40', 'not updated', 0),
(28, 'chishia@gmail.com', '1', 'hey', '2025-05-08 11:37:31', 'not updated', 0),
(29, 'chishia@gmail.com', '2', 'hey', '2025-05-08 11:37:56', 'not updated', 0),
(30, 'admin@gmail.com', '2', 'hii', '2025-05-08 11:37:58', 'not updated', 0),
(31, 'chishia@gmail.com', '2', 'hii', '2025-05-08 11:38:07', 'not updated', 0),
(32, 'admin@gmail.com', '2', 'hello', '2025-05-08 11:38:31', 'not updated', 0),
(33, 'admin@gmail.com', '2', 'hey', '2025-05-08 11:40:24', 'not updated', 0),
(34, 'chishia@gmail.com', '1', 'hey', '2025-05-08 11:40:28', 'not updated', 0),
(35, 'chishia@gmail.com', '1', 'hey', '2025-05-08 11:42:05', 'not updated', 0),
(36, 'admin@gmail.com', '2', 'abcs', '2025-05-08 11:42:09', 'not updated', 0),
(37, 'admin@gmail.com', '2', 'hey', '2025-05-08 11:44:02', 'not updated', 0),
(38, 'chishia@gmail.com', '1', 'hey', '2025-05-08 11:47:13', 'not updated', 0),
(39, 'admin@gmail.com', '2', 'hey', '2025-05-08 11:48:15', 'not updated', 0),
(40, 'admin@gmail.com', '2', 'hii', '2025-05-08 11:49:42', 'not updated', 0),
(41, 'admin@gmail.com', '2', 'helllll', '2025-05-08 11:50:14', 'not updated', 0),
(42, 'admin@gmail.com', '2', 'gfrdi', '2025-05-08 11:50:21', 'not updated', 0),
(43, 'chishia@gmail.com', '1', '+20', '2025-05-08 11:51:35', 'not updated', 0),
(44, 'admin@gmail.com', '2', 'hey', '2025-05-08 11:55:12', 'not updated', 0),
(45, 'chishia@gmail.com', '1', 'hey', '2025-05-08 12:05:24', 'not updated', 0),
(46, 'chishia@gmail.com', '1', 'aayu?', '2025-05-08 12:05:37', 'not updated', 0),
(47, 'chishia@gmail.com', '1', 'hey', '2025-05-08 12:05:56', 'not updated', 0),
(48, 'admin@gmail.com', '2', 'sdsdsds', '2025-05-08 12:06:08', 'not updated', 0),
(49, 'chishia@gmail.com', '1', 'asd', '2025-05-08 12:08:30', 'not updated', 0),
(50, 'admin@gmail.com', '2', 'ha asd', '2025-05-08 12:08:37', 'not updated', 0),
(51, 'admin@gmail.com', '2', 'hey', '2025-05-08 12:17:18', 'not updated', 0),
(52, 'admin@gmail.com', '2', 'hey', '2025-05-08 12:18:32', 'not updated', 0),
(53, 'admin@gmail.com', '2', 'hey', '2025-05-08 12:19:28', 'not updated', 0),
(54, 'admin@gmail.com', '2', 'sd', '2025-05-08 12:19:37', '2025-05-09T06:55:27.739Z', 0),
(55, 'chishia@gmail.com', '1', 'hey', '2025-05-08 12:55:44', 'not updated', 0),
(56, 'chishia@gmail.com', '1', 'hey', '2025-05-08 12:55:57', 'not updated', 0),
(57, 'chishia@gmail.com', '1', 'hey', '2025-05-08 13:13:38', 'not updated', 0),
(58, 'admin@gmail.com', '2', 'hey', '2025-05-08 13:13:53', '2025-05-09T06:52:33.063Z', 1),
(59, 'admin@gmail.com', '2', 'hey', '2025-05-08 13:15:23', 'not updated', 1),
(60, 'chishia@gmail.com', '1', 'hey', '2025-05-08 13:15:27', 'not updated', 0),
(61, 'chishia@gmail.com', '1', 'hey', '2025-05-08 13:15:36', 'not updated', 0),
(62, 'admin@gmail.com', '2', 'hi', '2025-05-08 13:15:41', 'not updated', 1),
(63, 'chishia@gmail.com', '1', 'km pan!', '2025-05-08 13:15:44', 'not updated', 0),
(64, 'chishia@gmail.com', '1', 'nsakdsa', '2025-05-08 13:15:51', 'not updated', 0),
(65, 'admin@gmail.com', '2', 'bs bhai karna pad', '2025-05-08 13:16:00', 'not updated', 1),
(66, 'chishia@gmail.com', '1', 'hey', '2025-05-08 13:21:04', 'not updated', 0),
(67, 'admin@gmail.com', '2', 'updaetd', '2025-05-09 07:20:32', '2025-05-09T08:24:33.191Z', 0),
(68, 'chishia@gmail.com', '1', 'me too', '2025-05-09 08:07:18', '2025-05-09T08:24:54.800Z', 0);

-- --------------------------------------------------------

--
-- Table structure for table `follow_following_table`
--

CREATE TABLE `follow_following_table` (
  `id` int NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `followers_id` varchar(255) NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `follower_name` varchar(255) NOT NULL,
  `followed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL DEFAULT 'following',
  `time_of_unfollow` varchar(255) NOT NULL DEFAULT 'following'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `follow_following_table`
--

INSERT INTO `follow_following_table` (`id`, `user_id`, `followers_id`, `user_name`, `follower_name`, `followed_at`, `status`, `time_of_unfollow`) VALUES
(1, '2', '3', 'chishia@gmail.com', 'rist@gmail.com', '2025-03-17 13:51:20', 'following', 'following'),
(2, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-18 04:56:30', 'notfollowing', 'following'),
(3, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-18 04:57:28', 'notfollowing', 'following'),
(4, '4', '1', 'parth@gmail.com', 'admin@gmail.com', '2025-03-18 09:14:01', 'notfollowing', 'following'),
(5, '4', '6', 'parth@gmail.com', 'ruhan@gmail.com', '2025-03-18 09:34:33', 'following', 'following'),
(6, '1', '5', 'admin@gmail.com', 'jency@gmail.com', '2025-03-18 10:02:19', 'notfollowing', 'following'),
(7, '2', '5', 'chishia@gmail.com', 'jency@gmail.com', '2025-03-18 10:02:19', 'notfollowing', 'following'),
(8, '3', '5', 'rist@gmail.com', 'jency@gmail.com', '2025-03-18 10:02:20', 'notfollowing', 'following'),
(9, '4', '5', 'parth@gmail.com', 'jency@gmail.com', '2025-03-18 10:02:20', 'notfollowing', 'following'),
(10, '6', '5', 'ruhan@gmail.com', 'jency@gmail.com', '2025-03-18 10:02:20', 'notfollowing', 'following'),
(11, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-18 12:13:15', 'notfollowing', 'following'),
(12, '3', '1', 'rist@gmail.com', 'admin@gmail.com', '2025-03-18 12:13:16', 'notfollowing', 'following'),
(13, '4', '1', 'parth@gmail.com', 'admin@gmail.com', '2025-03-18 12:13:16', 'notfollowing', 'following'),
(14, '5', '1', 'jency@gmail.com', 'admin@gmail.com', '2025-03-18 12:13:16', 'notfollowing', 'following'),
(15, '6', '1', 'ruhan@gmail.com', 'admin@gmail.com', '2025-03-18 12:13:17', 'notfollowing', 'following'),
(16, '7', '1', 'abhi@gmail.com', 'admin@gmail.com', '2025-03-18 12:13:17', 'notfollowing', 'following'),
(17, '7', '1', 'undefined', 'undefined', '2025-03-18 12:20:55', 'notfollowing', 'following'),
(18, '2', '1', 'undefined', 'undefined', '2025-03-18 12:24:32', 'notfollowing', 'following'),
(19, '2', '1', 'undefined', 'undefined', '2025-03-18 12:24:47', 'notfollowing', 'following'),
(20, '3', '1', 'undefined', 'undefined', '2025-03-18 12:25:51', 'notfollowing', 'following'),
(21, '4', '1', 'undefined', 'undefined', '2025-03-18 12:26:42', 'notfollowing', 'following'),
(22, '5', '1', 'jency@gmail.com', 'admin@gmail.com', '2025-03-18 12:27:09', 'notfollowing', 'following'),
(23, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-18 12:27:15', 'notfollowing', 'following'),
(24, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-18 12:40:52', 'notfollowing', 'following'),
(25, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-18 12:41:09', 'notfollowing', 'following'),
(26, '3', '1', 'rist@gmail.com', 'admin@gmail.com', '2025-03-18 12:41:13', 'notfollowing', 'following'),
(27, '1', '8', 'admin@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:36:11', 'notfollowing', 'following'),
(28, '2', '8', 'chishia@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:36:13', 'notfollowing', 'following'),
(29, '3', '8', 'rist@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:36:13', 'notfollowing', 'following'),
(30, '4', '8', 'parth@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:36:14', 'notfollowing', 'following'),
(31, '5', '8', 'jency@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:36:14', 'notfollowing', 'following'),
(32, '6', '8', 'ruhan@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:36:14', 'notfollowing', 'following'),
(33, '7', '8', 'abhi@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:36:14', 'notfollowing', 'following'),
(34, '1', '8', 'admin@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:45:01', 'following', 'following'),
(35, '2', '8', 'chishia@gmail.com', 'abhishek@gmail.com', '2025-03-18 13:45:04', 'following', 'following'),
(36, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-19 05:15:39', 'notfollowing', 'following'),
(37, '5', '1', 'jency@gmail.com', 'admin@gmail.com', '2025-03-19 05:15:57', 'following', 'following'),
(38, '2', '1', 'chishia@gmail.com', 'admin@gmail.com', '2025-03-19 12:57:29', 'following', 'following'),
(39, '13', '1', 'meet@gmail.com', 'admin@gmail.com', '2025-04-21 06:08:37', 'following', 'following'),
(40, '6', '1', 'ruhan@gmail.com', 'admin@gmail.com', '2025-04-21 06:08:39', 'following', 'following');

-- --------------------------------------------------------

--
-- Table structure for table `like_tweet`
--

CREATE TABLE `like_tweet` (
  `id` int NOT NULL,
  `tweet_id` int NOT NULL,
  `liked` varchar(255) NOT NULL DEFAULT 'liked',
  `liked_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `liked_by` int NOT NULL,
  `is_deleted` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `like_tweet`
--

INSERT INTO `like_tweet` (`id`, `tweet_id`, `liked`, `liked_at`, `liked_by`, `is_deleted`) VALUES
(1, 1, 'liked', '2025-03-17 13:51:13', 3, 0),
(2, 2, 'liked', '2025-03-17 13:53:27', 3, 0),
(3, 1, 'dislike', '2025-03-18 04:18:28', 1, 0),
(4, 5, 'liked', '2025-03-18 04:30:24', 1, 0),
(5, 6, 'liked', '2025-03-18 09:34:27', 6, 0),
(6, 7, 'liked', '2025-03-18 10:03:17', 5, 0),
(7, 11, 'liked', '2025-03-18 12:54:53', 1, 0),
(8, 10, 'liked', '2025-03-18 13:07:30', 1, 0),
(9, 4, 'liked', '2025-03-18 13:36:45', 8, 0),
(10, 11, 'dislike', '2025-03-18 13:38:06', 8, 0),
(11, 13, 'liked', '2025-03-18 13:38:32', 8, 0),
(12, 14, 'liked', '2025-03-18 13:41:52', 8, 0),
(13, 9, 'liked', '2025-03-18 13:41:58', 8, 0),
(14, 22, 'liked', '2025-03-19 11:03:32', 5, 0),
(15, 15, 'liked', '2025-03-19 11:03:37', 5, 0),
(16, 22, 'liked', '2025-03-19 12:58:33', 1, 0),
(17, 23, 'dislike', '2025-03-19 12:58:38', 1, 0),
(18, 2, 'liked', '2025-03-20 11:52:38', 1, 0),
(19, 25, 'liked', '2025-03-24 13:10:25', 1, 0),
(20, 7, 'dislike', '2025-03-24 13:12:01', 1, 0),
(21, 26, 'liked', '2025-05-08 11:54:18', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ReTweets`
--

CREATE TABLE `ReTweets` (
  `id` int NOT NULL,
  `Tweet_id` int NOT NULL,
  `tweet_by` varchar(255) NOT NULL,
  `ReTweet_content` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ReTweets`
--

INSERT INTO `ReTweets` (`id`, `Tweet_id`, `tweet_by`, `ReTweet_content`, `created_at`, `is_deleted`) VALUES
(1, 1, 'chishia@gmail.com', 'thanks! admin for warm  welcome', '2025-03-17 13:46:39', 0),
(2, 1, 'chishia@gmail.com', 'guys! try to increase user', '2025-03-17 13:48:16', 0),
(3, 1, 'rist@gmail.com', 'hey admin thanks for your welcome i will maximize the usage of your application', '2025-03-17 13:51:02', 0),
(4, 1, 'parth@gmail.com', 'hey admin i am parth and now i am using twitter', '2025-03-17 13:56:43', 0),
(5, 2, 'admin@gmail.com', 'welcome chishia to the my twitter!!', '2025-03-18 04:50:26', 0),
(6, 10, 'admin@gmail.com', 'welcome bro', '2025-03-18 12:44:50', 0),
(7, 10, 'admin@gmail.com', 'again', '2025-03-18 12:45:25', 0),
(11, 14, 'admin@gmail.com', 'aaaa', '2025-03-18 13:52:55', 0),
(12, 23, 'admin@gmail.com', 'admin', '2025-03-20 11:53:59', 0),
(13, 22, 'admin@gmail.com', 'hey', '2025-03-21 09:14:14', 0),
(14, 25, 'admin@gmail.com', 'i want to come!!', '2025-03-24 12:50:01', 0),
(15, 7, 'admin@gmail.com', 'hey jency how are you!!', '2025-03-25 04:25:54', 0),
(16, 5, 'admin@gmail.com', 'yuppp it\'s your todays tweet', '2025-03-25 08:23:15', 0),
(17, 25, 'admin@gmail.com', 'hey', '2025-04-21 06:09:30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Tweets`
--

CREATE TABLE `Tweets` (
  `tweet_id` int NOT NULL,
  `Tweet_by` varchar(255) NOT NULL,
  `tweet_by_user_id` int NOT NULL,
  `Tweet_title` varchar(255) NOT NULL,
  `Tweet_content` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `like_count` int NOT NULL DEFAULT '0',
  `is_deleted` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Tweets`
--

INSERT INTO `Tweets` (`tweet_id`, `Tweet_by`, `tweet_by_user_id`, `Tweet_title`, `Tweet_content`, `created_at`, `like_count`, `is_deleted`) VALUES
(1, 'admin@gmail.com', 1, 'hey guys ! i am admin of twitter..', 'i am welcoming you in this amazing app', '2025-03-17 13:45:25', 1, 0),
(2, 'chishia@gmail.com', 2, 'hey guys! i am chishia ', 'now i m using this amazing app', '2025-03-17 13:47:02', 2, 0),
(3, 'rist@gmail.com', 3, 'hey guys! i am rist and now i am on twitter', 'Thanks for warm welcome admin', '2025-03-17 13:50:02', 0, 0),
(4, 'parth@gmail.com', 4, 'hello guys i am parth and i am now on twitter!!', 'thank admin for this amazing app', '2025-03-17 13:57:13', 1, 0),
(5, 'admin@gmail.com', 1, 'today\'s tweet!!', 'hey this is 18th of march and i am tweeting this!', '2025-03-18 04:30:12', 1, 0),
(6, 'ruhan@gmail.com', 6, 'hey i am ruhan', 'i am on twitter', '2025-03-18 09:34:23', 1, 0),
(7, 'jency@gmail.com', 5, 'hey there i am jency', '#twitter', '2025-03-18 10:02:57', 1, 1),
(8, 'admin@gmail.com', 1, 'i am updated', 'yupp', '2025-03-18 11:28:38', 0, 1),
(9, 'admin@gmail.com', 1, 'hey!!', 'i am here', '2025-03-18 11:32:22', 1, 1),
(10, 'admin@gmail.com', 1, 'hey!!', 'i am here', '2025-03-18 11:32:56', 1, 1),
(11, 'admin@gmail.com', 1, 'lll', 'i am here', '2025-03-18 11:33:25', 0, 1),
(12, 'admin@gmail.com', 1, 'hey', 'hey', '2025-03-18 11:33:39', 0, 1),
(13, 'admin@gmail.com', 1, 'testing', 'testing', '2025-03-18 11:43:49', 1, 1),
(14, 'abhishek@gmail.com', 8, 'abhi', 'here', '2025-03-18 13:40:54', 1, 0),
(15, 'admin@gmail.com', 1, 'i am tweeting from russia ', 'current time is : mar 19 13:01', '2025-03-19 04:02:50', 1, 0),
(16, 'admin@gmail.com', 1, 'hey i am admin and i am tweeting from akdt ', 'my current time is : mar 18 time 20:18', '2025-03-19 04:13:40', 0, 0),
(17, 'admin@gmail.com', 1, 'hey hey', 'hey hey', '2025-03-19 04:51:04', 0, 1),
(18, 'admin@gmail.com', 1, 'hey', 'hey', '2025-03-19 05:14:06', 0, 1),
(19, 'admin@gmail.com', 1, 'hey', 'hey', '2025-03-19 05:42:00', 0, 1),
(20, 'admin@gmail.com', 1, 'hey', 'hey', '2025-03-19 06:06:53', 0, 1),
(21, 'ruhan@gmail.com', 6, 'hey', 'hey', '2025-03-19 06:24:30', 0, 1),
(22, 'vinu@gmail.com', 9, 'welcome', 'Hey i am vinayak and i am on twitter! ', '2025-03-19 06:53:28', 1, 0),
(23, 'admin@gmail.com', 1, 'hey i am admin', 'welcome user ', '2025-03-19 11:18:04', 0, 0),
(24, 'admin@gmail.com', 1, 'i am tweet from model', 'yupp!!', '2025-03-24 12:03:19', 0, 0),
(25, 'admin@gmail.com', 1, 'hey i am admin ', 'greetings of the day', '2025-03-24 12:23:39', 1, 0),
(26, 'chishia@gmail.com', 2, 'moj', 'ek dum moj', '2025-05-08 11:54:14', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `fname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Phone_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(2555) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `is_deleted` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `Phone_number`, `password`, `is_deleted`, `created_at`) VALUES
(1, 'system', 'admin', 'admin@gmail.com', '9664933100', '$2b$10$SnInWRY4/3lVuu16.ke8s.vZx3VeaM8mv1Hh.UcEeObsEcHgcgDmG', 0, '2025-03-17 13:44:31'),
(2, 'chishia', 'riaz', 'chishia@gmail.com', '4444444444', '$2b$10$TzbDvZyImpRLYQOr/NkkIOcq5I4A7ko1TRu8lrWYYBrTv83KDOFwW', 0, '2025-03-17 13:46:01'),
(3, 'rist', 'rehdan', 'rist@gmail.com', '4561237894', '$2b$10$oI7zIA09B/GHMO49s.9vhO9WSLW1iA1KgIZbfHckCgBLu4uYMSlye', 0, '2025-03-17 13:49:14'),
(4, 'Parth', 'Rajyaguru', 'parth@gmail.com', '5522331144', '$2b$10$t80wtlumfjUbMjgwe2Vble50iQmv9xCX0ktKd0fOPFU6tOA8Yv3S2', 0, '2025-03-17 13:54:34'),
(5, 'jency', 'melaviya', 'jency@gmail.com', '9054812656', '$2b$10$pHxzT22j6LDoPmSxx3eYaeGsB1hBAhyP9TqLDtI4aaU1yB5DGEihC', 0, '2025-03-18 06:01:19'),
(6, 'ruhan', 'rehny', 'ruhan@gmail.com', '5555566666', '$2b$10$b.hcQYDhkncGq6PEUhTSJem0dlLQypberyNbSUDg3DtE/VkrSNNqG', 0, '2025-03-18 09:32:40'),
(7, 'abhishek', 'mishra', 'abhi@gmail.com', '0123456789', '$2b$10$edGy6nXsFG7tmlA9xDpe2.MKTEFXcXydpO5lKVbEc/VBNlW6dzg7.', 0, '2025-03-18 11:49:16'),
(8, 'Abhishek', 'Mishra', 'abhishek@gmail.com', '0123456789', '$2b$10$oeJ/Ygw/upryoIQBCbq9OeEilpVXUIsmNxvSXjDF1zJk5Kng/ybGy', 0, '2025-03-18 13:35:53'),
(9, 'vinayak', 'chavada', 'vinu@gmail.com', '8989898989', '$2b$10$hhgGSdG5wBnZVbbyW8M8Aei0SbF962iP7Z4QTb7HDvDfSDJAObV7C', 0, '2025-03-19 06:52:30'),
(10, 'akhil', 'patoliya', 'akhil@gmail.com', '4654564651', '$2b$10$SHW1o1GivZATCYUCZxMEvOWvCmNRHKEj9O3pcEoWbq6hVc4OG1hIi', 0, '2025-03-21 07:03:34'),
(13, 'meet', 'gathiya', 'meet@gmail.com', '4564564562', '$2b$10$5oGm.B9Zc90W/yxumThQNuLMgz8LPSoqfhJTzG3ZJzR4hWFsyEZvW', 0, '2025-03-21 07:22:35'),
(15, 'marmik', 'shah', 'marmik@gmail.com', '1231231231', '$2b$10$NzmifcyU5ORHmh2Wz.xP9OtzSMtnoaHBmP.l70pGia3LM/Ti5soci', 0, '2025-03-21 07:26:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `follow_following_table`
--
ALTER TABLE `follow_following_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `like_tweet`
--
ALTER TABLE `like_tweet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ReTweets`
--
ALTER TABLE `ReTweets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Tweets`
--
ALTER TABLE `Tweets`
  ADD PRIMARY KEY (`tweet_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `follow_following_table`
--
ALTER TABLE `follow_following_table`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `like_tweet`
--
ALTER TABLE `like_tweet`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `ReTweets`
--
ALTER TABLE `ReTweets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Tweets`
--
ALTER TABLE `Tweets`
  MODIFY `tweet_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
