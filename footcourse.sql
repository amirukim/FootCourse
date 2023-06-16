-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2023 at 11:56 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `footcourse`
--

-- --------------------------------------------------------

--
-- Table structure for table `boots`
--

CREATE TABLE `boots` (
  `id` int(11) NOT NULL,
  `bootName` varchar(255) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `details` varchar(1000) DEFAULT NULL,
  `bootImage1` varchar(50) DEFAULT NULL,
  `bootImage2` varchar(50) DEFAULT NULL,
  `bootImage3` varchar(50) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `footShape` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `ground` varchar(255) DEFAULT NULL,
  `buyLink` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `boots`
--

INSERT INTO `boots` (`id`, `bootName`, `brand`, `details`, `bootImage1`, `bootImage2`, `bootImage3`, `position`, `footShape`, `material`, `price`, `ground`, `buyLink`, `createdAt`, `updatedAt`) VALUES
(1, 'Zoom Mercurial Dream Speed Superfly 9 ', 'Nike', 'Nike’s Superfly 9 presents another milestone for the Nike Mercurial line, finally incorporating the Zoom Airbag that positively impacted basketball and running shoes. But the new-gen Mercs are more than just the inclusion of the Swoosh brand’s patented technology. They have re-engineered the structure and material from top to bottom to give their own updated version of responsiveness, lockdown, and speed.', 'zoom1.png', 'zoom2.png', 'zoom3.png', 'Winger', 'Normal Shape', 'Vaporsite+', '1,289', 'Firm Ground', 'https://swoo.sh/3ZDW1uZ', '2023-03-04 09:45:47', '2023-03-04 09:45:47'),
(2, 'Predator Edge.1 Low', 'Adidas', 'Predator Edge retains the high level of ball grip introduced by the Freak and Mutator to make it a relevant boot still. The fit and comfort is quite the significant step back, and might even force a choice between grip performance and fit and feel when deciding whether to get the Edge or not.', 'edge1.png', 'edge2.webp', 'edge3.webp', 'Striker', 'Normal Shape', 'PRIMEKNIT', '999', 'Firm Ground', 'https://bit.ly/3GkuCqO', '2023-03-06 10:49:38', '2023-03-06 10:49:38'),
(3, 'Phantom GX Elite Dynamic', 'Nike', 'The Nike Phantom GX football boots are designed for technical players and playmakers, mostly worn by midfielders as they are the ones who initiate and dictate the passage of play. But as you can see above, even those up front are into the Phantom GXs, especially those who create and provide goal-scoring opportunities in advanced roles. ', 'phantom.png', NULL, NULL, 'Midfielder ', 'Wide Shape', 'Gripknit ', '1,119', 'Firm Ground', 'https://swoo.sh/3zCWfI9', '2023-04-05 18:04:53', '2023-04-05 18:04:53'),
(4, 'Tiempo Legend 9', 'Nike', 'The Legend 9 are one of the most affordable top level boots on the market and Nike\'s Elite Tiempo come with a comfortable, lightweight k-leather upper.', 'tiempo.png', NULL, NULL, 'Centre-Back', 'Wide Shape', 'K-Leather', '990', 'Firm Ground', 'https://bit.ly/3mhVaSO', '2023-04-05 18:04:53', '2023-04-05 18:04:53');

-- --------------------------------------------------------

--
-- Table structure for table `fitness`
--

CREATE TABLE `fitness` (
  `id` int(11) NOT NULL,
  `courseName` varchar(255) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `equipment1` varchar(255) DEFAULT NULL,
  `equipment2` varchar(255) DEFAULT NULL,
  `iconEquipment1` varchar(100) DEFAULT NULL,
  `iconEquipment2` varchar(100) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `aspect` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fitness`
--

INSERT INTO `fitness` (`id`, `courseName`, `image`, `level`, `equipment1`, `equipment2`, `iconEquipment1`, `iconEquipment2`, `duration`, `aspect`, `createdAt`, `updatedAt`) VALUES
(1, 'The Aeriel Workout', 'AerielWorkout.jpg', 'Beginner', 'Agility Ladder', 'Cone', 'ph:ladder-simple', 'ph:traffic-cone', 6, 'Header', '2023-03-26 14:48:07', '2023-03-26 14:48:07'),
(2, 'The FullBody Workout', 'fullbodyWorkout.jfif', 'Intermediate', 'Cone', 'Field', 'ph:traffic-cone', 'mdi:soccer-field', 10, 'Explosive', '2023-03-26 14:48:07', '2023-03-26 14:48:07'),
(3, 'Endurance Booster', 'EnduranceBooster.png', 'Intermediate', 'Cone', 'Agility Ladder', 'ph:traffic-cone', 'ph:ladder-simple', 8, 'Endurance', '2023-05-31 17:12:52', '2023-05-31 17:12:52'),
(4, 'Speed Booster', 'SpeedBooster.jpg', 'Beginner', 'Cone', 'Field', 'ph:traffic-cone', 'mdi:soccer-field', 4, 'Speed', '2023-05-31 19:18:40', '2023-05-31 19:18:40'),
(5, 'Knee Strengthen', 'KneeStrengthen.jpg', 'Intermediate', 'Cone', 'Field', 'ph:traffic-cone', 'mdi:soccer-field', 4, 'Strength', '2023-05-31 19:18:40', '2023-05-31 19:18:40'),
(6, 'Metal Knee', 'MetalKnee.avif', 'Intermediate', 'Cone', 'Field', 'ph:traffic-cone', 'mdi:soccer-field', 4, 'Strength', '2023-05-31 19:18:40', '2023-05-31 19:18:40');

-- --------------------------------------------------------

--
-- Table structure for table `learns`
--

CREATE TABLE `learns` (
  `id` int(11) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `videoname` varchar(255) DEFAULT NULL,
  `videoDuration` varchar(255) DEFAULT NULL,
  `videoLink` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `learns`
--

INSERT INTO `learns` (`id`, `image`, `videoname`, `videoDuration`, `videoLink`, `createdAt`, `updatedAt`) VALUES
(1, '1.jpg', 'How Lisandro Martinez Has Improved Man Utd', '8.33', 'https://www.youtube.com/embed/FQOT4BmoSXI', '2023-01-16 09:28:53', '2023-01-16 09:28:53'),
(2, '2.jpg', 'Pep Guardiola and ETH have different tactics', '7.36', 'https://www.youtube.com/embed/6NceJAx1YpI', '2023-01-16 15:39:43', '2023-01-16 15:39:43'),
(3, '3.jpg', 'What Is The Football Meta?', '9.52', 'https://www.youtube.com/embed/SFMgheDDXqk', '2023-05-09 17:17:38', '2023-05-09 17:17:38'),
(4, '4.jpg', 'Xavi’s Barcelona Tactics Explained', '9.42', 'https://www.youtube.com/embed/NssR_eHENps', '2023-05-09 17:17:38', '2023-05-09 17:17:38'),
(5, '5.jpg', 'Martin Ødegaard\'s roles in Arteta’s Arsenal', '9.08', 'https://www.youtube.com/embed/ovmq-NqO-Sc', '2023-05-09 17:37:57', '2023-05-09 17:37:57'),
(6, '6.jpg', 'How To Play As A Center Back? ', '12.11', 'https://www.youtube.com/embed/uIKOdSgcMIk', '2023-05-09 17:37:57', '2023-05-09 17:37:57'),
(8, '7.webp', 'Improve Your Scanning ', '8.47', 'https://www.youtube.com/embed/pSKXPfTsi8g', '2023-05-09 17:37:57', '2023-05-09 17:37:57'),
(9, '8.jpg', 'Be a Good Winger', '8.22', 'https://www.youtube.com/embed/hVEy8hyw5Es', '2023-05-09 17:37:57', '2023-05-09 17:37:57'),
(11, '9.jpg', 'Winger Movement', '3.23', 'https://www.youtube.com/embed/OIH_rueIiOE', '2023-05-09 17:37:57', '2023-05-09 17:37:57');

-- --------------------------------------------------------

--
-- Table structure for table `technique`
--

CREATE TABLE `technique` (
  `id` int(11) NOT NULL,
  `courseName` varchar(255) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `equipment1` varchar(255) DEFAULT NULL,
  `equipment2` varchar(255) DEFAULT NULL,
  `iconEquipment1` varchar(100) DEFAULT NULL,
  `iconEquipment2` varchar(100) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `aspect` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `technique`
--

INSERT INTO `technique` (`id`, `courseName`, `image`, `level`, `equipment1`, `equipment2`, `iconEquipment1`, `iconEquipment2`, `position`, `duration`, `aspect`, `createdAt`, `updatedAt`) VALUES
(1, 'Basic Dribbling', 'modul1.jpg', 'Beginner', 'Field', 'Cone', 'mdi:soccer-field', 'ph:traffic-cone', 'All', 5, 'Dribbling', '2023-03-26 15:21:47', '2023-03-26 15:21:47'),
(2, 'Basic Finishing', 'modul2.jpg', 'Beginner', 'Net', 'Cone', 'fluent-emoji-high-contrast:goal-net', 'ph:traffic-cone', 'All', 4, 'Finishing', '2023-03-26 15:21:47', '2023-03-26 15:21:47'),
(3, 'Ball Felling', 'BallFelling.webp', 'Beginner', 'Field', 'Cone', 'mdi:soccer-field', 'ph:traffic-cone', 'All', 4, 'Control', '2023-03-26 15:21:47', '2023-03-26 15:21:47'),
(4, 'Fundamental Control', 'FundamentalControl.jpg', 'Beginner', 'Field', 'Cone', 'mdi:soccer-field', 'ph:traffic-cone', 'All', 4, 'Control', '2023-03-26 15:21:47', '2023-03-26 15:21:47');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `videoname` varchar(255) DEFAULT NULL,
  `testName` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `imageTest` varchar(100) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `aspect` varchar(50) DEFAULT NULL,
  `beginnerLevel` int(100) DEFAULT NULL,
  `amateurLevel` int(100) DEFAULT NULL,
  `proLevel` int(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `videoname`, `testName`, `category`, `imageTest`, `details`, `aspect`, `beginnerLevel`, `amateurLevel`, `proLevel`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'Strength Test', 'Fitness', 'StrengthTest.png', 'The athlete stands upright in socks or bare feet, as still as possible on the mat with weight evenly distributed over both feet. When all is ready, the athlete squats down until the knees are bent at 90 degrees, while swinging the arms back behind the body. Without pausing, the arms are swung forwards and the athlete jumps as high as possible, landing back on the mat on both feet at the same time. The take-off must be from both feet, with no initial steps or shuffling, and the subject must also not pause at the base of the squat. Record the best result of at least three attempts - athletes may continue to jump as long as improvements are being made. Allow a good rest between trials.', 'Strength', NULL, NULL, NULL, '2023-05-02 15:04:11', '2023-05-02 15:04:11'),
(2, NULL, 'Agility Test', 'Fitness', 'AgilityTest.png', 'The 5-0-5 test is a commonly recognized agility test, but it is unable to measure agility. On the other hand, the Pro-Agility (5-10-5) test, which is also known as the shuttle run test, is not a measure of agility but an assessment of change of direction speed. The 505 agility test is used to monitor the development of speed and agility and indicates an athlete\'s ability to decelerate rapidly from high-speed running, reorient the body to perform a single 180-degree turn, and then accelerate in a new direction. The Agility T-test is another test commonly used to assess the ability of team sport athletes to change direction, including acceleration, deceleration, and lateral movement.', 'Agility', NULL, NULL, NULL, '2023-05-02 15:04:11', '2023-05-02 15:04:11'),
(3, NULL, 'Speed Test', 'Fitness', 'SpeedTest.png', 'The test involves running a single maximum sprint over a set distance, with time recorded. After a standardized warm-up, the test is conducted at 50 meters. The starting position should be standardized, starting from a stationary position with a foot behind the starting line, with no rocking movements. You can use the stopwatch to catch the time taken for this test. It is usual to give the athletes an adequate warm-up and practice first, and some encouragement to continue running hard past the finish line.', 'Speed', NULL, NULL, NULL, '2023-05-02 15:06:37', '2023-05-02 15:06:37'),
(4, NULL, 'Control It', 'Technique', 'ControlTest.png', NULL, 'Control', NULL, NULL, NULL, '2023-05-02 15:06:37', '2023-05-02 15:06:37'),
(5, NULL, 'Pass To Goal', 'Technique', 'PassingTest.png', NULL, 'Passing', NULL, NULL, NULL, '2023-05-02 15:08:00', '2023-05-02 15:08:00'),
(6, NULL, 'Dribbling Wizard', 'Technique', 'DribblingWizard.png', 'This challenge is designed to support players to develop dribbling and moving with the ball. Try the challenge after you have practiced your dribbling skills.', 'Dribbling', NULL, NULL, NULL, '2023-05-02 15:08:00', '2023-05-02 15:08:00'),
(7, NULL, 'Score or Not', 'Technique', 'FinishingTest.png', 'For start, the player starts on the left side of the box and initiates dribble to the top right cone. The Player then cuts the ball onto the opposite foot and looks to finish in the corner. Back to the starting cone and repeat it. \r\n', 'Finishing', NULL, NULL, NULL, '2023-05-02 15:08:00', '2023-05-02 15:08:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `phoneNo` varchar(15) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `Speed` decimal(50,2) DEFAULT NULL,
  `Agility` decimal(50,2) DEFAULT NULL,
  `Strength` decimal(50,2) DEFAULT NULL,
  `Finishing` int(50) DEFAULT NULL,
  `Dribbling` int(50) DEFAULT NULL,
  `Passing` int(50) DEFAULT NULL,
  `Header` int(50) DEFAULT NULL,
  `Control` int(50) DEFAULT NULL,
  `Crossing` int(50) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `position`, `phoneNo`, `level`, `Speed`, `Agility`, `Strength`, `Finishing`, `Dribbling`, `Passing`, `Header`, `Control`, `Crossing`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Hakim', 'hakim@gmail.com', '$2b$10$b/Cq/0BxK8qowFDfEqN.jOajP/4QE.R1jOwt1qaw9NJ/2MMI7vRv.', 'cb', NULL, NULL, '7.50', '3.00', '10.30', 54, 5, NULL, NULL, 67, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJIYWtpbSIsImVtYWlsIjoiaGFraW1AZ21haWwuY29tIiwiaWF0IjoxNjg2NzMwNzIwLCJleHAiOjE2ODY4MTcxMjB9.SGiveoxmcaQ_322HsisItc7xIwsVHSBQMMZZupjyzEg', '2023-01-06 11:26:45', '2023-06-14 08:18:40'),
(2, 'Alimi', 'alimi@gmail.com', '$2b$10$M5FeyqJ7v.N5OOsUxZ/e9.V9MP1z0n5VmDI2B9lTNq1hjSpg1ajlu', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJBbGltaSIsImVtYWlsIjoiYWxpbWlAZ21haWwuY29tIiwiaWF0IjoxNjczMDI2MDIzLCJleHAiOjE2NzMxMTI0MjN9.ea8a2feW6howR6L-MW9VfIVVwzJOAF0qa1Gj_cWAstY', '2023-01-06 11:30:52', '2023-01-06 17:27:03'),
(3, 'Nashrul', 'nashrul@gmail.com', '$2b$10$m7Shfz3SmU.e21wx99ZvXexHHH8SX7iZG7kUS5I7WPHLurO91dB8q', 'cb', NULL, NULL, '6.00', '3.10', '4.90', 54, 3, 30, NULL, 35, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJOYXNocnVsIiwiZW1haWwiOiJuYXNocnVsQGdtYWlsLmNvbSIsImlhdCI6MTY4NTQzNTYxNywiZXhwIjoxNjg1NTIyMDE3fQ.La7qP_fgq9wOUEV6sBLJGf4ru5omqH-aGeK-RtUQdoQ', '2023-01-08 05:14:42', '2023-05-30 16:22:18'),
(4, 'irfan', 'irfan@gmail.com', '$2b$10$l3ufEdvV4fOueTb08UnLA.3m0P7cT2vNiVW48JFhg3fDhLcKmqmoC', 'st', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsIm5hbWUiOiJpcmZhbiIsImVtYWlsIjoiaXJmYW5AZ21haWwuY29tIiwiaWF0IjoxNjczNzkxMjMxLCJleHAiOjE2NzM4Nzc2MzF9.M4x7AbCl14EvPLbyNhcRBItniCq_eAFwgIsfBuJGP4I', '2023-01-15 13:59:55', '2023-01-15 14:00:31'),
(5, 'aiman', 'aiman@gmail.com', '$2b$10$p8xw2DS9EklOYzmAyH.Y7eKIQs1chkXC/X6QRT9Qj5eNDegm/ebGy', 'w', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsIm5hbWUiOiJhaW1hbiIsImVtYWlsIjoiYWltYW5AZ21haWwuY29tIiwiaWF0IjoxNjczNzkxNTM5LCJleHAiOjE2NzM4Nzc5Mzl9.HyJPwj8cN7gi3hVkxi3aWkAs8CkdGwZuXuWQI5Ta9Fc', '2023-01-15 14:05:21', '2023-01-15 14:05:39'),
(6, 'Zakwan', 'zakwan@gmail.com', '$2b$10$LKPD5dPSY9OvB4G8v2JSUONy6hEG8Ht./bfS/iDYhRn2VyFwrT0Ae', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsIm5hbWUiOiJaYWt3YW4iLCJlbWFpbCI6Inpha3dhbkBnbWFpbC5jb20iLCJpYXQiOjE2NzQ1NjY4OTYsImV4cCI6MTY3NDY1MzI5Nn0.RdYlOz9Zgz2eWn93JIWlTy0plBBVymvErnaj3PSh1zs', '2023-01-24 13:28:04', '2023-01-24 13:28:16'),
(7, 'Ahmad', 'ahmad@gmail.com', '$2b$10$DbCXkTYcr0pFpYhKGP0JReyzBJOKthOd5TCABhTAHIWEGtbIGYjdO', 'w', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsIm5hbWUiOiJBaG1hZCIsImVtYWlsIjoiYWhtYWRAZ21haWwuY29tIiwiaWF0IjoxNjc0NjExNzUyLCJleHAiOjE2NzQ2OTgxNTJ9.E3VnGWAM3EMUrDWIF8U0OgnpEOMZOANFlbEHFrstSUw', '2023-01-25 01:55:36', '2023-01-25 01:55:52'),
(8, 'Faiz', 'faiz@gmail.com', '$2b$10$s.5RBbn8CRzHKd/PStkCyuPgrYeQuqczQMk47mfzICwA4uZJ636yq', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-05-05 08:32:40', '2023-05-05 08:32:40');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `videoName` varchar(255) DEFAULT NULL,
  `courseName` varchar(255) DEFAULT NULL,
  `courselevel` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `videoLocation` varchar(255) DEFAULT NULL,
  `aspect` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `videoName`, `courseName`, `courselevel`, `detail`, `videoLocation`, `aspect`, `createdAt`, `updatedAt`) VALUES
(1, 'Warm-up', 'Modul 1', 'Fundamental', 'The player must set 1 min in stoppage time', 'technique/warmup.mp4', 'Preparation ', '2023-03-27 18:20:41', '2023-03-27 18:20:41'),
(2, 'Side to Side', 'Modul 1', 'Beginner', 'The player must run side to side from one to another cone ', 'technique/sidetoside.mp4', 'Speed & Agility', '2023-03-27 18:20:41', '2023-03-27 18:20:41'),
(3, 'Side Jump', 'The Aeriel Workout', 'Beginner ', 'Stand to the left of the first square of the ladder, with feet shoulder-width apart. Lower nearly into a squat, drive through heels to pop off the ground, and jump into the ladder square diagonally in front of your feet.\r\n', 'SideJump.mp4', 'Strength', '2023-05-24 19:06:04', '2023-05-24 19:06:04'),
(4, 'Star Jump', 'The Aeriel Workout', 'Beginner', 'This one is more advanced but a good test. While facing the stairs, start with a star jump where both feet are in the agility ladder box, then open step outside the agility ladder box. Go ahead and repeat.', 'StarJump.mp4', 'Strength', '2023-05-24 19:06:04', '2023-05-24 19:06:04'),
(5, 'Stability Hops', 'The Aeriel Workout', 'Beginner', 'Start with one foot stepping out of the ladder box, then jump with one foot into the ladder box by landing with the opposite foot. Repeat.', 'StabilityHops.mp4', 'Strength', '2023-05-24 19:06:04', '2023-05-24 19:06:04'),
(6, 'High Hops', 'The Aeriel Workout', 'Beginner', 'Start with both feet outside the ladder box and jump until your knees are level with your waist. Land both feet outside the ladder box. Repeat.', 'HighHops.mp4', 'Strength', '2023-05-24 19:06:04', '2023-05-24 19:06:04'),
(7, 'Push Circuit', 'The FullBody Workout', 'Intermediate', 'This exercise routine can help improve your explosive power, endurance, and overall fitness. It is important to warm up properly before engaging in any physical activity to prevent injury.', 'PushCircuit.mp4', 'Speed', '2023-05-26 11:31:44', '2023-05-26 11:31:44'),
(8, 'Squat Circuit', 'The FullBody Workout', 'Intermediate', 'This exercise routine can help improve your agility, power, and overall fitness. It is important to warm up properly before engaging in any physical activity to prevent injury.', 'SquatCircuit.mp4', 'Agility', '2023-05-26 11:31:44', '2023-05-26 11:31:44'),
(9, 'Core Circuit', 'The FullBody Workout', 'Intermediate', 'These exercises can help improve your core strength, posture, and overall fitness. It is important to warm up properly before engaging in any physical activity to prevent injury.', 'CoreCircuit.mp4', 'Strength', '2023-05-26 11:40:10', '2023-05-26 11:40:10'),
(10, 'Square Of Pain', 'Endurance Booster', 'Intermediate', 'Arrange the cones with a distance of 10 meters on the long side and 5 meters on the short side. Place the agility ladder on the other side. This exercise is to train the player\'s endurance.', 'SquareOfPain.mp4', 'Endurance', '2023-05-31 17:21:08', '2023-05-31 17:21:08'),
(11, 'Zig Zag Explosion', 'Endurance Booster', 'Intermediate', 'Arrange the cones in a zig-zag pattern with a distance of 5 meters for each cone. This exercise not only trains endurance but also increases the player\'s agility.', 'ZigZagExplosion.mp4', 'Agility', '2023-05-31 17:21:08', '2023-05-31 17:21:08'),
(12, 'Suicide Run', 'Endurance Booster', 'Intermediate', 'Arrange 4 cones in a straight line with a distance of 5 meters. Make sure to run with explosive power to increase endurance. This exercise will strengthen the player\'s legs so that they don\'t get tired easily during the match.', 'SuicideRun.mp4', 'Endurance', '2023-05-31 17:28:32', '2023-05-31 17:28:32'),
(13, 'Zig Zag Dribble', 'Basic Dribbling', 'Beginner', 'Arrange 4 cones in a straight line with a distance of 5 meters. Dribble with a zig-zag movement with the ball.', 'BasicDribbling.mp4', 'Dribbling', '2023-05-31 17:28:32', '2023-05-31 17:28:32'),
(14, 'First Time Shoot', 'Basic Finishing', 'Beginner', 'Pass the ball with one touch pass then shot the ball without stopping the ball. Prepare a goal post.', 'FirstTimeShoot.mp4', 'Finishing', '2023-05-31 17:28:32', '2023-05-31 17:28:32'),
(15, 'Lunges', 'Metal Knee', 'Beginner', 'Lunges use large lower-body muscles, including the glutes, hamstrings, and quadriceps. This strength-building move can help correct muscle imbalances, increase flexibility, and boost metabolism.', 'Lunges.mp4', 'Strength', '2023-05-31 17:28:32', '2023-05-31 17:28:32'),
(16, 'Reverse Nordic', 'Metal Knee', 'Intermediate', 'The reverse Nordic is a great exercise to help improve hip flexor and quadriceps strength, size, and mobility.', 'ReverseNordic.mp4', 'Strength', '2023-05-31 17:28:32', '2023-05-31 17:28:32'),
(17, 'Diagonal Reaches', 'Knee Strengthen', 'Intermediate', 'This move strengthens your gluteus maximus for a more powerful stride, while also working your gluteus medius and minimus for improved single-leg and pelvic stability.', 'DiagonalReach.mp4', 'Strength', '2023-05-31 17:28:32', '2023-05-31 17:28:32'),
(18, 'Hindu Squat', 'Knee Strengthen', 'Intermediate', 'Hindu squats are ideal for improving endurance and can certainly offer good carry-over to regular back squats for improved muscle gains.', 'HinduSquat.mp4', 'Strength', '2023-05-31 17:28:32', '2023-05-31 17:28:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `boots`
--
ALTER TABLE `boots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fitness`
--
ALTER TABLE `fitness`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `learns`
--
ALTER TABLE `learns`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `videoname` (`videoname`);

--
-- Indexes for table `technique`
--
ALTER TABLE `technique`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `VIDEO_NAME` (`videoname`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `boots`
--
ALTER TABLE `boots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fitness`
--
ALTER TABLE `fitness`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `learns`
--
ALTER TABLE `learns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `technique`
--
ALTER TABLE `technique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `VIDEO_NAME` FOREIGN KEY (`videoname`) REFERENCES `learns` (`videoname`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
