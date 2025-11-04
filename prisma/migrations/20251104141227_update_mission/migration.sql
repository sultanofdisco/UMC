/*
  Warnings:

  - You are about to drop the column `content` on the `mission` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `mission` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `mission` table. All the data in the column will be lost.
  - Added the required column `missioinContent` to the `mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `missionPoint` to the `mission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `missionTitle` to the `mission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mission` DROP COLUMN `content`,
    DROP COLUMN `points`,
    DROP COLUMN `title`,
    ADD COLUMN `missioinContent` TEXT NOT NULL,
    ADD COLUMN `missionPoint` INTEGER NOT NULL,
    ADD COLUMN `missionTitle` VARCHAR(100) NOT NULL;
