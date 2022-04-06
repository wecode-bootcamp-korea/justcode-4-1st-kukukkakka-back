const productDao = require("../models/productDao");

const getProductList = async () => {
  try {
    return await productDao.getProductList();
  } catch (error) {
    console.log(error);
  }
};

const getProductDetail = async (product_id) => {
  try {
    return await productDao.getDetailList(product_id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProductList, getProductDetail };
