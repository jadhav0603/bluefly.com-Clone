const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/:key/:value", async (req, res) => {
  const { key, value } = req.params;


  const allowedKeys = ["category", "brand", "productName"];
  if (!allowedKeys.includes(key)) {
    return res.status(400).json({ message: "Invalid search key" });
  }

  const page = parseInt(req.query.page) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  const collections = [
    "clothings",
    "handbags",
    "jewelrys",
    "shoes",
    "sunglasses",
  ];

  try {
    let allResults = [];
    let totalCount = 0;

    for (const col of collections) {
      const collection = mongoose.connection.db.collection(col);

      const count = await collection.countDocuments({ [key]: value });
      totalCount += count;

      const data = await collection
        .find({ [key]: value })
        .skip(skip)
        .limit(limit)
        .lean()
        .toArray();

      allResults.push(...data);
    }

    res.status(200).json({
      data: allResults,
      totalRecords: totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ err_msg: error.message });
  }
});

module.exports = router;
