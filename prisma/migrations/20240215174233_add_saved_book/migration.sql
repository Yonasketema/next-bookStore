/*
  Warnings:

  - Added the required column `user_name` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Review` ADD COLUMN `user_image` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `SavedBook` (
    `id` VARCHAR(191) NOT NULL,
    `bookId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SavedBook` ADD CONSTRAINT `SavedBook_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
