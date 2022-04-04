const cartDao = require("../models/cartDao");

const userCart = async (
  userId,
  productId,
  addOptionId,
  quantity,
  totalprice
) => {
  const createdCarts = await cartDao.createCarts(
    userId,
    productId,
    addOptionId,
    quantity,
    totalprice
  );
};
