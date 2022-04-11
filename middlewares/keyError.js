const validCreateCart = async (req, res, next) => {
  const { productId, addOptionId, quantity, totalPrice } = req.body;

  if (!productId || !quantity || !addOptionId || !totalPrice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const validUpdateCart = async (req, res, next) => {
  const { id, quantity, totalPrice } = req.body;

  if (!id || !quantity || !totalPrice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const validDeleteCart = async (req, res, next) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

const validAddOptionCart = async (req, res, next) => {
  const { id, totalPrice } = req.body;

  if (!id || !totalPrice) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  next();
};

module.exports = {
  validCreateCart,
  validUpdateCart,
  validDeleteCart,
  validAddOptionCart,
};
