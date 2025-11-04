/*
  Warnings:

  - You are about to drop the column `restaurant_id` on the `review` table. All the data in the column will be lost.
  - Added the required column `store_id` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `review` DROP COLUMN `restaurant_id`,
    ADD COLUMN `store_id` INTEGER NOT NULL;
