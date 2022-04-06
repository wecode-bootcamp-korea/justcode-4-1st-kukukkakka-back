const listDao = require("../models/listDao");

const postKeyWord = async (keyword) => {
  return await listDao.postKeyWord(keyword);
};

module.exports = { postKeyWord };
