const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ success: false, message: "Incorrect email and password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ userID: existingUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({ message: "Login Successful", token, user: existingUser });

    } catch (error) {
        res.status(500).json({ LoginError: error.message });
    }
});


router.get('/logedIn', authMiddleware, async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.user.userID); 

        const userCollection = mongoose.connection.db.collection('registrations');
        const user = await userCollection.findOne({ _id: userId }).lean(); 

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
