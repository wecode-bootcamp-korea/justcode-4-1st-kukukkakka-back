const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const keyError = require("../middlewares/keyError");
const cartController = require("../controllers/cartController");

router.use(authorizedUser.getUserIdByVerifyToken);

router.post("", keyError.validCreateCart, cartController.createCart);
router.get("", cartController.getCart);
router.patch("", keyError.validUpdateCart, cartController.updateCart);
router.delete("", keyError.validDeleteCart, cartController.deleteCart);
router.patch(
  "/option",
  keyError.validAddOptionCart,
  cartController.updateAddOption
);

module.exports = router;
