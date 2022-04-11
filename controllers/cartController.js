const cartService = require("../services/cartService");

const createCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, addOptionId, quantity, totalPrice } = req.body;

    const userCart = await cartService.createCart(
      userId,
      productId,
      addOptionId,
      quantity,
      totalPrice
    );

    return res.status(201).json({ message: "SUCCESS : ADD TO CART" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.userId;
    const userCart = await cartService.getCart(userId);
    return res.status(201).json({ userCart });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

const updateCart = async (req, res) => {
  try {
    const { id, quantity, totalPrice } = req.body;

    const userCart = await cartService.updateCart(id, quantity, totalPrice);

    return res.status(201).json({ message: "SUCCESS : UPDATE TO CART" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.body;

    const userCart = await cartService.deleteCart(id);

    return res.status(201).json({ message: "SUCCESS : DELETE A USER CART" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

const updateAddOption = async (req, res) => {
  try {
    const { id, totalPrice } = req.body;

    const userCart = await cartService.updateAddOption(id, totalPrice);

    return res.status(201).json({ message: "SUCCESS : UPDATE ADD OPTION" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
  updateAddOption,
};
