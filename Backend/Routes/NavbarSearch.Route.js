const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/:key/:value", async(req, res) => {
  const { key, value } = req.params;
const page = parseInt(req.query.page) || 1;
  const limit = 12;
  const skip = (page - 1) * limit;


  const collectionArray = [
    "clothings",
    "handbags",
    "jewelrys",
    "shoes",
    "sunglasses",
  ];

  try {
    const searchData = collectionArray.map(async(ele)=>{
        const Collection_Name = mongoose.connection.db.collection(ele)
        
          const count = await collection.countDocuments({ [key]: value });
      totalCount += count;

        const data = await Collection_Name.find(
          {[key]:value}
        )
        .skip(skip)
        .limit(12)
        .toArray();

        return data
    })

    const result = (await Promise.all(searchData)).flat();

      const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({result, totalPages, currentPage:page})


  } catch (error) {
    res.status(500).json({err_msg: error})
  }
});



module.exports = router