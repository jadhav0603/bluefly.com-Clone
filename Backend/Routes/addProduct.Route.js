const express = require('express');
const mongoose = require('mongoose');
const authMiddleware = require('../middleware/authMiddleware');
const {Favorite,AddToCarts} = require('../models/productSchema');


const router = express.Router();

router.post('/favouriteData', authMiddleware, async (req, res) => {
    const data = req.body;
    const userId = req.user.userID; 

    try {
        const existingFav = await Favorite.findOne({ userId, productName: data.productName });

        if (existingFav) {
            await Favorite.deleteOne({ userId, productName: data.productName });
            return res.status(200).json({ message: "Favourite removed" });
        }

        const newFavorite = new Favorite({ userId, ...data });
        await newFavorite.save();

        res.status(201).json({ message: "Favourite added" });

    } catch (error) {
        res.status(500).json({ err_message: error.message });
    }
});

router.get("/getFavouriteData",authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userID; // Ensure userId exists in the request
        
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }

        const data = await Favorite.find({ userId: userId }); 

        if (data.length === 0) {
            return res.status(404).json({ success: false, message: "No favorites found" });
        }

        res.status(200).json({ success: true, data });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;


