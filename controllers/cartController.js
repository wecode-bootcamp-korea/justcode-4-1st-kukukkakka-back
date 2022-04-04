const res = require("express/lib/response");
const cartService = require("../services/cartService");

const validCartForm = async (req, res, next) => {
  const { userId, productId, addOptionId, quantity, totalprice } = req.body;
  console.log("email: ", email, "password: ", password);

  if (!userId || !productId || !addOptionId || !quantity || !totalprice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const createCart = async (req, res) => {
  try {
    const { userId, productId, addOptionId, quantity, totalprice } = req.body;

    const userCart = await cartService.createCart(
      userId,
      productId,
      addOptionId,
      quantity,
      totalprice
    );
    console.log("cartController에서 cartService로 주는 파라미터 : ", userCart);

    res.status(201).json({ message: "SUCCESS" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { validCartForm, createCart };
