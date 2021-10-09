-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2021 at 06:28 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_react_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `charts`
--

CREATE TABLE `charts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `x_data` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `y_data` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `charts`
--

INSERT INTO `charts` (`id`, `x_data`, `y_data`, `created_at`, `updated_at`) VALUES
(1, 'PHP', '100', NULL, NULL),
(2, 'MySql', '90', NULL, NULL),
(3, 'Laravel', '95', NULL, NULL),
(4, 'React', '85', NULL, NULL),
(5, 'Opencart', '80', NULL, NULL),
(6, 'JavaScript', '100', NULL, NULL),
(7, 'Vue Js', '80', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `client_reviews`
--

CREATE TABLE `client_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `client_reviews`
--

INSERT INTO `client_reviews` (`id`, `client_img`, `client_title`, `client_description`, `created_at`, `updated_at`) VALUES
(1, 'https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg', 'Lalit Aryan', 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding I am a passionate Web Developer, Programmer.', NULL, NULL),
(2, 'https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg', 'Lalit Aryan', 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding I am a passionate Web Developer, Programmer.', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Lalit Aryan', 'lalitaryan1993@gmail.com', 'this is test message', '2021-10-04 01:21:43', '2021-10-04 01:21:43'),
(2, 'Lalit Aryan', 'lalitaryan1993@gmail.com', 'this is test message', '2021-10-04 01:22:46', '2021-10-04 01:22:46');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `short_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `small_img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `long_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_lecture` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_student` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skill_all` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `short_title`, `short_description`, `small_img`, `long_title`, `long_description`, `total_duration`, `total_lecture`, `total_student`, `skill_all`, `video_url`, `created_at`, `updated_at`) VALUES
(1, 'Laravel 8', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg', 'Aenean sed nibh a magna posuere tempo faucib', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.\r\n\r\nSex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack!\" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.\r\n\r\nCozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.', '2 hours', '8', '1200', ' Metus interdum metus\r\n Ligula cur maecenas\r\n Metus interdum metus\r\nLigula cur maecenass\r\n Metus interdum metus', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', NULL, NULL),
(2, 'Laravel 8', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg', 'Aenean sed nibh a magna posuere tempo faucib', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.\r\n\r\nSex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack!\" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.\r\n\r\nCozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.', '2 hours', '8', '1200', ' Metus interdum metus\r\n Ligula cur maecenas\r\n Metus interdum metus\r\nLigula cur maecenass\r\n Metus interdum metus', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', NULL, NULL),
(3, 'Laravel 8', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg', 'Aenean sed nibh a magna posuere tempo faucib', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.\r\n\r\nSex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack!\" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.\r\n\r\nCozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.', '2 hours', '8', '1200', ' Metus interdum metus\r\n Ligula cur maecenas\r\n Metus interdum metus\r\nLigula cur maecenass\r\n Metus interdum metus', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', NULL, NULL),
(4, 'Laravel 8', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg', 'Aenean sed nibh a magna posuere tempo faucib', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.\r\n\r\nSex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack!\" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.\r\n\r\nCozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.', '2 hours', '8', '1200', ' Metus interdum metus\r\n Ligula cur maecenas\r\n Metus interdum metus\r\nLigula cur maecenass\r\n Metus interdum metus', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', NULL, NULL),
(5, 'Laravel 8', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg', 'Aenean sed nibh a magna posuere tempo faucib', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.\r\n\r\nSex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack!\" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.\r\n\r\nCozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.', '2 hours', '8', '1200', ' Metus interdum metus\r\n Ligula cur maecenas\r\n Metus interdum metus\r\nLigula cur maecenass\r\n Metus interdum metus', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', NULL, NULL),
(6, 'Laravel 8', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg', 'Aenean sed nibh a magna posuere tempo faucib', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.\r\n\r\nSex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! \"Now fax quiz Jack!\" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.\r\n\r\nCozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.', '2 hours', '8', '1200', ' Metus interdum metus\r\n Ligula cur maecenas\r\n Metus interdum metus\r\nLigula cur maecenass\r\n Metus interdum metus', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `footers`
--

CREATE TABLE `footers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `twitter` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `footer_credit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footers`
--

INSERT INTO `footers` (`id`, `address`, `email`, `phone`, `facebook`, `youtube`, `twitter`, `footer_credit`, `created_at`, `updated_at`) VALUES
(1, 'Munda Khera, Jhajjar, Haryana', 'mail@lalitaryan.com', '+91-8901505876', 'https://www.facebook.com/', 'https://www.youtube.com/', 'https://twitter.com/', '© Copyright 2021 by Lalit Aryan, All Rights Reserved', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `home_page_etcs`
--

CREATE TABLE `home_page_etcs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `home_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `home_subtitle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tech_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_student` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_course` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_review` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `home_page_etcs`
--

INSERT INTO `home_page_etcs` (`id`, `home_title`, `home_subtitle`, `tech_description`, `total_student`, `total_course`, `total_review`, `video_description`, `video_url`, `created_at`, `updated_at`) VALUES
(1, 'LET\'S EXPLORE', 'Learn Professionally', 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding and passionate Web Developer, Programmer.\r\n\r\nI am working online for last 4 years and I have a lot of experience in web development. I have worked with many different types of projects.\r\n\r\nI have worked with PHP, JavaScript, HTML, CSS, Bootstrap, JQuery, React, Wordpress, MySQL, Laravel, Vue, Git, Github and many more.', '35000', '22', '3000', 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding and passionate Web Developer, Programmer.\r\n\r\nI am working online for last 4 years and I have a lot of experience in web development. I have worked with many different types of projects.\r\n\r\nI have worked with PHP, JavaScript, HTML, CSS, Bootstrap, JQuery, React, Wordpress, MySQL, Laravel, Vue, Git, Github and many more.', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `information`
--

CREATE TABLE `information` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `about` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `refund` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `terms` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `privacy` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `information`
--

INSERT INTO `information` (`id`, `about`, `refund`, `terms`, `privacy`, `created_at`, `updated_at`) VALUES
(1, 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding, I am passionate Web Developer, Programmer.\r\n\r\nI am working online for the last 4 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.\r\n\r\n', 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding, I am passionate Web Developer, Programmer.\r\n\r\nI am working online for the last 4 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.\r\n\r\n', 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding, I am passionate Web Developer, Programmer.\r\n\r\nI am working online for the last 4 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.\r\n\r\n', 'Hi! I\'m Lalit Aryan. I\'m a web developer with a serious love for coding, I am passionate Web Developer, Programmer.\r\n\r\nI am working online for the last 4 years and have created several successful websites running on the internet. I try to create a project-based course that helps you to learn professionally and make you fell as a complete developer. easy learning exists to help you succeed in life.\r\n\r\nEach course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.\r\n\r\nEducation makes the world a better place. Make your world better with new skills.\r\n\r\n', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2021_10_03_150225_create_sessions_table', 1),
(7, '2021_10_03_151442_create_services_table', 2),
(8, '2021_10_03_151906_create_client_reviews_table', 2),
(9, '2021_10_03_152438_create_projects_table', 2),
(10, '2021_10_03_153807_create_contacts_table', 3),
(11, '2021_10_03_154229_create_footers_table', 3),
(12, '2021_10_03_154844_create_home_page_etcs_table', 4),
(13, '2021_10_03_162453_create_charts_table', 5),
(14, '2021_10_03_162955_create_information_table', 5),
(16, '2021_10_03_163603_create_courses_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `img_one` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_two` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_features` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `live_preview` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `img_one`, `img_two`, `project_name`, `project_description`, `project_features`, `live_preview`, `created_at`, `updated_at`) VALUES
(1, 'https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg', 'http://localhost:3000/static/media/pdetails.8992071a.png', 'Education in continuing a proud tradition.', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,', ' Requirment Gathering\r\n\r\n Metus interdum metus\r\n\r\n Ligula cur maecenas Ligula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenas', 'http://127.0.0.1:8000/', NULL, NULL),
(2, 'https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg', 'http://localhost:3000/static/media/pdetails.8992071a.png', 'Education in continuing a proud tradition.', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,', ' Requirment Gathering\r\n\r\n Metus interdum metus\r\n\r\n Ligula cur maecenas Ligula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenas', 'http://127.0.0.1:8000/', NULL, NULL),
(3, 'https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg', 'http://localhost:3000/static/media/pdetails.8992071a.png', 'Education in continuing a proud tradition.', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,', ' Requirment Gathering\r\n\r\n Metus interdum metus\r\n\r\n Ligula cur maecenas Ligula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenas', 'http://127.0.0.1:8000/', NULL, NULL),
(4, 'https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg', 'http://localhost:3000/static/media/pdetails.8992071a.png', 'Education in continuing a proud tradition.', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,', ' Requirment Gathering\r\n\r\n Metus interdum metus\r\n\r\n Ligula cur maecenas Ligula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenas', 'http://127.0.0.1:8000/', NULL, NULL),
(5, 'https://image.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg', 'http://localhost:3000/static/media/pdetails.8992071a.png', 'Education in continuing a proud tradition.', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,', ' Requirment Gathering\r\n\r\n Metus interdum metus\r\n\r\n Ligula cur maecenas Ligula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula\r\n\r\n Ligula cur maecenasLigula cur maecenasLigula cur maecenas\r\n\r\n Ligula cur maecenasLigula cur maecenas', 'http://127.0.0.1:8000/', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_logo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `service_description`, `service_logo`, `created_at`, `updated_at`) VALUES
(1, 'E-Commerce', 'I will design and develop an e-commerce online store website.', 'http://localhost:3000/static/media/design.f41ad80b.png', NULL, NULL),
(2, 'Web Design', 'Qualified web design and attractive effects which catch the visitor\'s Eye.', 'http://localhost:3000/static/media/ecommerce.b768fece.png', NULL, NULL),
(3, 'Web Development', 'Clean and fresh issue free code to make your website dynamic perfectly.', 'http://localhost:3000/static/media/web.b4891cbb.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('Pj1P4ubLM9DlElva1PNgSnmIfr7D2kNCAj14orkr', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYkFlRXJCV2NhZXY2aXBybWd3dzJxaHVKU0xmZlNaQ2NrWXJjMEZ1SyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1633273953);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `charts`
--
ALTER TABLE `charts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_reviews`
--
ALTER TABLE `client_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `footers`
--
ALTER TABLE `footers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_page_etcs`
--
ALTER TABLE `home_page_etcs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `charts`
--
ALTER TABLE `charts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `client_reviews`
--
ALTER TABLE `client_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `footers`
--
ALTER TABLE `footers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_page_etcs`
--
ALTER TABLE `home_page_etcs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `information`
--
ALTER TABLE `information`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
