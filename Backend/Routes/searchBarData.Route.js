const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get('/:searchVal', async (req, res) => {
  const { searchVal } = req.params;

  const collectionArray = [
    "clothings",
    "handbags",
    "jewelrys",
    "shoes",
    "sunglasses",
  ];

  try {
    const searchData = collectionArray.map(async (ele) => {
      const collectionName = mongoose.connection.db.collection(ele);
      const data = await collectionName
        .find({
          $or: [
            { productName: { $regex: searchVal, $options: 'i' } },
            { category: { $regex: searchVal, $options: 'i' } },
          ],
        })
        .toArray();

      return data.length > 0 ? { collection: ele, data } : null;
    });

    const result = (await Promise.all(searchData)).filter(Boolean);

    if (!result || result.length === 0) {
      return res.status(404).json({ error: "No results found" });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ err_msg: error.message });
  }
});

module.exports = router;