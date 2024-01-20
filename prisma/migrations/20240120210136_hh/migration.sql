/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_A_fkey";

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("slug");

-- AlterTable
ALTER TABLE "_ProjectToTechnology" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
