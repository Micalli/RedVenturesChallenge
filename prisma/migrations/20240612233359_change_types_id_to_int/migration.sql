/*
  Warnings:

  - The primary key for the `broths` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `broths` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `proteins` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `proteins` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "broths" DROP CONSTRAINT "broths_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "broths_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "proteins" DROP CONSTRAINT "proteins_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "proteins_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "recipe" DROP CONSTRAINT "recipe_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "recipe_pkey" PRIMARY KEY ("id");
