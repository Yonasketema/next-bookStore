-- CreateTable
CREATE TABLE `Book` (
    `id` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `publicationDate` DATETIME(3) NOT NULL,
    `genre` ENUM('historical', 'fiction', 'science') NOT NULL,
    `img` VARCHAR(191) NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
