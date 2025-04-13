-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-04-2025 a las 03:11:34
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `busDB`
--
CREATE DATABASE IF NOT EXISTS `busDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `busDB`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Bus`
--

CREATE TABLE `Bus` (
  `Id` int(11) NOT NULL,
  `Numero_de_Bus` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Placa` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `FechaCreacion` datetime NOT NULL DEFAULT current_timestamp(),
  `Caracteristicas` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `MarcaBusId` bigint(20) NOT NULL,
  `esActivo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Bus`
--

INSERT INTO `Bus` (`Id`, `Numero_de_Bus`, `Placa`, `FechaCreacion`, `Caracteristicas`, `MarcaBusId`, `esActivo`) VALUES
(1, 'Bus 2505', 'ADO345', '2025-04-11 21:52:49', 'Test Caracteristicas', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Marcas`
--

CREATE TABLE `Marcas` (
  `Id` bigint(20) NOT NULL,
  `Marca` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Marcas`
--

INSERT INTO `Marcas` (`Id`, `Marca`) VALUES
(1, 'Volvo'),
(2, 'Scania');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Bus`
--
ALTER TABLE `Bus`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Placa` (`Placa`),
  ADD KEY `Marcas_MarcaBusId_Bus` (`MarcaBusId`);

--
-- Indices de la tabla `Marcas`
--
ALTER TABLE `Marcas`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Bus`
--
ALTER TABLE `Bus`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `Marcas`
--
ALTER TABLE `Marcas`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Bus`
--
ALTER TABLE `Bus`
  ADD CONSTRAINT `Marcas_MarcaBusId_Bus` FOREIGN KEY (`MarcaBusId`) REFERENCES `Marcas` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;


