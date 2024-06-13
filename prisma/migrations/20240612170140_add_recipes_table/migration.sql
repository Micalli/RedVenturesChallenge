-- CreateTable
CREATE TABLE "recipe" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("id")
);
