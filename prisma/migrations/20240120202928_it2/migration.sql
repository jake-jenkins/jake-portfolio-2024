/*
  Warnings:

  - You are about to drop the column `technologyId` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_technologyId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "technologyId";

-- AlterTable
ALTER TABLE "Technology" ADD COLUMN     "projectId" INTEGER;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
