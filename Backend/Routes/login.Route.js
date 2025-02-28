const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "User Not Found" });
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

module.exports = router;
