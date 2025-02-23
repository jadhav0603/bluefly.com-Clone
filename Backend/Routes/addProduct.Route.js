const express = require('express')
const Favorite = require ('../models/productSchema.js')
const authMiddleware = require("../middleware/authMiddleware.js")

const router = express.Router()

router.post('/favouriteData',authMiddleware,async (req,res)=>{
    const data = req.body
    const userId = req.user.id
    try {
        // const collectionName = mongoose.connection.db.collection('favourites')

        const existingFav = await Favorite.findOne({userId,productName: data.productName})

        if(existingFav){
            await Favorite.deleteOne({userId, productName: data.productName})
            return res.status(200).json({ message: "Favourite removed" });
        }

        const newFavorite = new Favorite({userId,...data})
        await newFavorite.save();
        res.status(201).json({ message: "Favourite added"})
        
    } catch (error) {
        res.status(500).json({err_message: error.message})
    }
})


router.get('/getFavouriteData',authMiddleware, async(req,res)=>{
    const userId = req.user.id
    try {
        // const collectionName = mongoose.connection.db.collection('favourites')

        const data = await Favorite.find({userId});

        if(data.length === 0){
            return res.status(404).json({success: false})
        }
        res.status(200).json({success:true, data})
        
    } catch (error) {
        res.status(500).json({"/getFavriteData route error": error.message})
    }
})


module.exports = router