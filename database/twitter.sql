-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 17, 2025 at 07:28 PM
-- Server version: 8.0.41-0ubuntu0.20.04.1
-- PHP Version: 7.4.3-4ubuntu2.28

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
(1, '2', '3', 'chishia@gmail.com', 'rist@gmail.com', '2025-03-17 13:51:20', 'following', 'following');

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
(2, 2, 'liked', '2025-03-17 13:53:27', 3, 0);

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
(4, 1, 'parth@gmail.com', 'hey admin i am parth and now i am using twitter', '2025-03-17 13:56:43', 0);

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
(1, 'admin@gmail.com', 1, 'hey guys ! i am admin of twitter ', 'i am welcoming you in this amazing app', '2025-03-17 13:45:25', 1, 0),
(2, 'chishia@gmail.com', 2, 'hey guys! i am chishia ', 'now i m using this amazing app', '2025-03-17 13:47:02', 1, 0),
(3, 'rist@gmail.com', 3, 'hey guys! i am rist and now i am on twitter', 'Thanks for warm welcome admin', '2025-03-17 13:50:02', 0, 0),
(4, 'parth@gmail.com', 4, 'hello guys i am parth and i am now on twitter!!', 'thank admin for this amazing app', '2025-03-17 13:57:13', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `Phone_number` varchar(255) NOT NULL,
  `password` varchar(2555) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `is_deleted` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `Phone_number`, `password`, `is_deleted`, `created_at`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', '1231231231', '$2b$10$SnInWRY4/3lVuu16.ke8s.vZx3VeaM8mv1Hh.UcEeObsEcHgcgDmG', 0, '2025-03-17 13:44:31'),
(2, 'chishia', 'riaz', 'chishia@gmail.com', '4444444444', '$2b$10$TzbDvZyImpRLYQOr/NkkIOcq5I4A7ko1TRu8lrWYYBrTv83KDOFwW', 0, '2025-03-17 13:46:01'),
(3, 'rist', 'rehdan', 'rist@gmail.com', '4561237894', '$2b$10$oI7zIA09B/GHMO49s.9vhO9WSLW1iA1KgIZbfHckCgBLu4uYMSlye', 0, '2025-03-17 13:49:14'),
(4, 'Parth', 'Rajyaguru', 'parth@gmail.com', '5522331144', '$2b$10$t80wtlumfjUbMjgwe2Vble50iQmv9xCX0ktKd0fOPFU6tOA8Yv3S2', 0, '2025-03-17 13:54:34');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `follow_following_table`
--
ALTER TABLE `follow_following_table`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `like_tweet`
--
ALTER TABLE `like_tweet`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ReTweets`
--
ALTER TABLE `ReTweets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Tweets`
--
ALTER TABLE `Tweets`
  MODIFY `tweet_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
