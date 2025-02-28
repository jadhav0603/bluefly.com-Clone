const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/userModel');

router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const existedUser = await User.findOne({ email });

        if (existedUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const hashPass = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashPass });

        await newUser.save();

        const token = jwt.sign({ userID: newUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

        res.status(201).json({ message: "User Registered Successfully", token, user: newUser });

    } catch (error) {
        res.status(500).json({ RegisterError: error.message });
    }
});

module.exports = router;
