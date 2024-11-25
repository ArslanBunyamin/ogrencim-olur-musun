-- CreateTable
CREATE TABLE "Gonullu" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,
    "linkedinURL" TEXT NOT NULL,

    CONSTRAINT "Gonullu_pkey" PRIMARY KEY ("id")
);
