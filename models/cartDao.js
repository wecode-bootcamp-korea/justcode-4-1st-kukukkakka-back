const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCarts = async (
  userId,
  productId,
  addOptionId,
  quantity,
  totalprice
) => {
  return await prisma.$queryRaw`INSERT INTO product_carts (user_id, product_id, add_option_id, quantity, totalprice, order_status) VALUES (${userId}, ${productId}, ${addOptionId}, ${quantity}, ${totalprice}, "주문 전")`;
};

module.exports = { createCarts };
