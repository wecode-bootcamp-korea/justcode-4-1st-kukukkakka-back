const express = require("express");
// const userRouter = require("./userRouter");
const router = express.Router(); // express 라우팅 기능을 사용하기 위해서 router 객체가 필요합니다.

const userRoute = require("./userRoute");
const productRoute = require("./productRoute");
const cartRoute = require("./cartRoute");

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/carts", cartRoute);

module.exports = router; // 이렇게 내보낸 router 는 express app 의 미들웨어로 사용됩니다.
