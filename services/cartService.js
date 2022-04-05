const cartDao = require("../models/cartDao");

const createCart = async (
  userId,
  productId,
  addOptionId,
  quantity,
  totalPrice
) => {
  const userCart = await cartDao.createUserCart(
    userId,
    productId,
    addOptionId,
    quantity,
    totalPrice
  );

  console.log("create api - cartService에서 Dao로 주는 파라미터 :", userCart);
};

const getCart = async () => {
  const userCart = await cartDao.getUserCart();

  console.log("read api - cartService에서 Dao로 주는 파라미터 :", userCart);
};

module.exports = { createCart, getCart };
