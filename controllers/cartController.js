// const res = require("express/lib/response");
const cartService = require("../services/cartService");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

const verifyUser = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(400).json({ message: "KEY_ERROR : Non-token" });
  }
  next();
};

const validCartForm = async (req, res, next) => {
  const { userId, productId, addOptionId, quantity, totalPrice } = req.body;

  console.log(
    "userId: ",
    userId,
    "productId: ",
    productId,
    "addOptionId :",
    addOptionId,
    "quantity :",
    quantity,
    "totalPrice : ",
    totalPrice
  );

  if (!userId || !productId || !quantity || !addOptionId || !totalPrice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const createCart = async (req, res) => {
  try {
    const { userId, productId, addOptionId, quantity, totalPrice } = req.body;

    const userCart = await cartService.createCart(
      userId,
      productId,
      addOptionId,
      quantity,
      totalPrice
    );

    console.log("create api - 컨트롤러에서 서비스로 주는 파라미터 :", userCart);

    return res.status(201).json({ message: "ADD TO CART SUCCESS" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

const getCart = async (req, res) => {
  try {
    const id = req.userId;
    console.log(id);
    const userCart = await cartService.getCart(id);

    console.log("read api - 컨트롤러에서 서비스로 주는 파라미터 :", userCart);

    return res.status(201).json({ userCart });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

module.exports = { verifyUser, validCartForm, createCart, getCart };
