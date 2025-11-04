/*
  Warnings:

  - Added the required column `status` to the `user_mission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_mission` ADD COLUMN `status` VARCHAR(50) NOT NULL;
