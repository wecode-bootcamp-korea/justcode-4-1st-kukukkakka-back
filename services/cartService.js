const cartDao = require("../models/cartDao");

const createCart = async (
  userId,
  productId,
  addOptionId,
  quantity,
  totalPrice
) => {
  try {
    return await cartDao.createUserCart(
      userId,
      productId,
      addOptionId,
      quantity,
      totalPrice
    );
  } catch (err) {
    console.log(err);
  }
};

const getCart = async (userId) => {
  try {
    const userCart = await cartDao.getUserCart(userId);
    return userCart;
  } catch (err) {
    console.log(err);
  }
};

const updateCart = async (id, quantity, totalPrice) => {
  try {
    return await cartDao.updateUserCart(id, quantity, totalPrice);
  } catch (err) {
    console.log(err);
  }
};

const deleteCart = async (id) => {
  try {
    return await cartDao.deleteUserCart(id);
  } catch (err) {
    console.log(err);
  }
};

const updateAddOption = async (id, totalPrice) => {
  try {
    return await cartDao.updateUserAddOption(id, totalPrice);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
  updateAddOption,
};
