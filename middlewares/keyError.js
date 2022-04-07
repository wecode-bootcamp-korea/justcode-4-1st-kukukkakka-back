const validCreateCart = async (req, res, next) => {
  const { productId, addOptionId, quantity, totalPrice } = req.body;

  if (!productId || !quantity || !addOptionId || !totalPrice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const validUpdateCart = async (req, res, next) => {
  const { productId, quantity, totalPrice } = req.body;

  if (!productId || !quantity || !totalPrice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const validDeleteCart = async (req, res, next) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const validAddOptionUpdateCart = async (req, res, next) => {
  const { productId, addOptionId, totalPrice } = req.body;

  if (!productId || !addOptionId || !totalPrice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

module.exports = {
  validCreateCart,
  validUpdateCart,
  validDeleteCart,
  validAddOptionUpdateCart,
};
