const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/:searchVal", async (req, res) => {
  const { searchVal } = req.params;

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const collectionArray = [
    "clothings",
    "handbags",
    "jewelrys",
    "shoes",
    "sunglasses",
  ];

  try {
    const searchResults = await Promise.all(
      collectionArray.map(async (ele) => {
        const collection = mongoose.connection.db.collection(ele);

        const query = {
          $or: [
            { productName: { $regex: searchVal, $options: "i" } },
            { category: { $regex: searchVal, $options: "i" } },
          ],
        };

        const total = await collection.countDocuments(query);

        if (total === 0) return null;

        const data = await collection
          .find(query)
          .skip(skip)
          .limit(limit)
          .toArray();

        return {
          collection: ele,
          totalProducts: total,
          totalPages: Math.ceil(total / limit),
          currentPage: page,
          data,
        };
      })
    );

    const result = searchResults.filter(Boolean);

    if (result.length === 0) {
      return res.status(404).json({ error: "No results found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ err_msg: error.message });
  }
});

module.exports = router;
