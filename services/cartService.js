const cartDao = require("../models/cartDao");

const createCart = async (
  userId,
  productId,
  addOptionId,
  quantity,
  totalPrice
) => {
  try {
    const userCart = await cartDao.createUserCart(
      userId,
      productId,
      addOptionId,
      quantity,
      totalPrice
    );

    console.log("create api - 서비스에서 Dao로 주는 파라미터 :", userCart);

    return userCart;
  } catch (err) {
    console.log(err);
  }
};

const getCart = async (userId) => {
  try {
    const userCart = await cartDao.getUserCart(userId);

    console.log("read api - 서비스에서 Dao로 주는 파라미터 :", userCart);

    return userCart;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createCart, getCart };
