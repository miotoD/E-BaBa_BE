/*
  Warnings:

  - Added the required column `productImage` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopImage` to the `Shops` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "productImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shops" ADD COLUMN     "shopImage" TEXT NOT NULL;
