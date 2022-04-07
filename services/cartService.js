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
    return await cartDao.getUserCart(userId);
  } catch (err) {
    console.log(err);
  }
};

const updateCart = async (userId, productId, quantity, totalPrice) => {
  try {
    return await cartDao.updateUserCart(
      userId,
      productId,
      quantity,
      totalPrice
    );
  } catch (err) {
    console.log(err);
  }
};

const deleteCart = async (userId, productId) => {
  try {
    return await cartDao.deleteUserCart(userId, productId);
  } catch (err) {
    console.log(err);
  }
};

const updateAddOption = async (userId, productId, addOptionId, totalPrice) => {
  try {
    return await cartDao.updateUserAddOption(
      userId,
      productId,
      addOptionId,
      totalPrice
    );
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
