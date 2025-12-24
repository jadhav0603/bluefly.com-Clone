const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/:key/:value", async(req, res) => {
  const { key, value } = req.params;

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
        const page = parseInt(req.query.page) || 1
        const skip = (page - 1) * 12
        const totalCount = Collection_Name.countDocuments

        const data = await Collection_Name.find(
          {[key]:value}
        )
        .skip(skip)
        .limit(12)
        .toArray();

        return data
    })

    const result = (await Promise.all(searchData)).flat();
    
    res.status(200).json({result, totalPages : Math.ceil(totalCount / 12)})


  } catch (error) {
    res.status(500).json({err_msg: error})
  }
});


module.exports = router