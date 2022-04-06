const listService = require("../services/listServices");

const postKeyWord = async (req, res) => {
  try {
    const { keyword } = req.body;
    await listService.postKeyWord(keyword);
    return res.status(200).json({ keyword });
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }
};

module.exports = { postKeyWord };
