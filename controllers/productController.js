const productService = require("../services/productService");
// const jwt = require("jsonwebtoken");

const getProductList = async (req, res) => {
  try {
    const productList = await productService.getProductList();
    return res.status(201).json({ productList: productList });
  } catch (error) {
    console.log(error);
  }
};

const getProductDetail = async (req, res) => {
  try {
    const product_id = req.url.split("/")[1];
    const productDetailData = await productService.getProductDetail(product_id);
    return res.status(201).json({ productDetailData: productDetailData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProductList, getProductDetail };
