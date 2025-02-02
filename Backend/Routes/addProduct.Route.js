const express = require('express')
const mongoose = require ('mongoose')
const verifyToken = require('../middleware/verifyToken')

const router = express.Router()

router.post('/favouriteData',verifyToken,async (req,res)=>{
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


router.get('/getFavouriteData', async(req,res)=>{
    try {
        const collectionName = mongoose.connection.db.collection('favourites')

        const data = await collectionName.find().toArray();

        if(!data || data.length === 0){
            return res.status(404).json({success: false})
        }
        res.status(200).json({success:true, data})
        
    } catch (error) {
        res.status(500).json({"/getFavriteData route error": error.message})
    }
})


module.exports = router