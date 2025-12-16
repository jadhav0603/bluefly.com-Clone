const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')
const { Favorite, AddToCarts } = require('../models/productSchema')

router.post('/addToCart', authMiddleware, async (req, res) => {
    const userId = req.user.userID
    const data = req.body

    if (!userId) {
        return res.status(404).json({ msg: 'token not found' })
    }

    try {
        const existedProduct = await AddToCarts.findOne({ userId, productName: data.productName })
        if (existedProduct) {
            return res.status(400).json({ msg: 'product alreaded added to carts' })
        }

        const addProd = new AddToCarts({ ...data, userId })
        await addProd.save()

        return res.status(200).json({ msg: 'product successfully added in carts' })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.get('/getCartData', authMiddleware, async (req, res) => {
    const userId = req.user.userID;

    if (!userId) {
        return res.status(404).json({ msg: 'token not found' });
    }

    try {
        const data = await AddToCarts.find({ userId });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/deleteCartData', authMiddleware, async (req, res) => {
    const userId = req.user.userID
    const { Id } = req.body
    if (!userId) {
        return res.status(404).json({ msg: 'token not found' })
    }

    try {
        const data = await AddToCarts.deleteOne({ userId, _id: Id })

        if (!data) {
            return res.status(404).json('data not found for delete')
        }

        res.status(200).json({ msg: 'product successfully deleted' })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})


router.delete('/deleteAllData',authMiddleware, async (req, res) => {
    try {
        const userId = req.user.userID
        
        if (!userId) {
            return res.status(404).json({ msg: 'token not found' });
        }

        
        const data = await AddToCarts.deleteMany({ userId })
        if (data.deletedCount === 0) {
            return res.status(404).json({ msg: 'no data in cart' })
        }
        
        res.status(200).json({ message: "successfully deleted all cart data" })
    
    } catch (error) {
        console.log("delete all data error : ", error.message)
        res.status(500).json({error: error.message})
    }
})


module.exports = router