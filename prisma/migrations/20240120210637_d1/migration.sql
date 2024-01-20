/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `Technology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Technology` table. All the data in the column will be lost.
  - Added the required column `categorySlug` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_B_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("slug");

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "categoryId",
ADD COLUMN     "categorySlug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Technology_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "_ProjectToTechnology" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("name") ON DELETE CASCADE ON UPDATE CASCADE;
