const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const {Favorite,AddToCarts} = require('../models/productSchema')

const router = express.Router()


router.delete('/deleteFav', authMiddleware, async (req, res) => {
    const userId = req.user.userID;
    const { productId } = req.body;
  
    if (!userId) {
      return res.status(400).json({ msg: "Invalid token" });
    }
  
    try {
      const productDelete = await Favorite.deleteOne({ 
        _id: productId, 
        userId: userId 
      });
  
      if (productDelete.deletedCount === 0) {
        return res.status(404).json({ error: 'No matching product found to delete.' });
      }
  
      res.status(200).json({ message: 'Product successfully removed from favourites' });
  
    } catch (error) {
      console.error("Delete error:", error);
      res.status(500).json({ error: 'Server error' });
    }
  });




module.exports = router