/*
  Warnings:

  - You are about to drop the column `genderId` on the `genders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `genders` DROP FOREIGN KEY `genders_genderId_fkey`;

-- AlterTable
ALTER TABLE `genders` DROP COLUMN `genderId`;
