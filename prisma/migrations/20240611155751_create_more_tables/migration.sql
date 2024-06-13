/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/

-- CreateTable
CREATE TABLE "broths" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "broths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proteins" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "proteins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL,
    "brothId" TEXT NOT NULL,
    "proteinId" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
