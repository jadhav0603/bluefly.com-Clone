const express = require('express')
const mongoose = require ('mongoose')

const router = express.Router()

router.post('/favouriteData',async (req,res)=>{
    const data = req.body
    try {
        const collectionName = mongoose.connection.db.collection('favourites')

        const existingFav = await collectionName.findOne({productName: data.productName})

        if(existingFav){
            await collectionName.deleteOne({productName: data.productName})
            return res.status(200).json({ message: "Favourite removed" });
        }

        await collectionName.insertOne(data)
        res.status(201).json({ message: "Favourite added"})
        
    } catch (error) {
        res.status(400).json({err_message: error.message})
    }
})


module.exports = router