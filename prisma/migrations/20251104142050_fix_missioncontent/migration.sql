/*
  Warnings:

  - You are about to drop the column `missioinContent` on the `mission` table. All the data in the column will be lost.
  - Added the required column `missionContent` to the `mission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mission` DROP COLUMN `missioinContent`,
    ADD COLUMN `missionContent` TEXT NOT NULL;
