/*
  Warnings:

  - You are about to drop the `products_add_options` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `products_add_options` DROP FOREIGN KEY `products_add_options_add_option_id_fkey`;

-- DropForeignKey
ALTER TABLE `products_add_options` DROP FOREIGN KEY `products_add_options_product_id_fkey`;

-- DropTable
DROP TABLE `products_add_options`;

-- CreateTable
CREATE TABLE `product_add_options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `add_option_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_add_options` ADD CONSTRAINT `product_add_options_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_add_options` ADD CONSTRAINT `product_add_options_add_option_id_fkey` FOREIGN KEY (`add_option_id`) REFERENCES `add_options`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
