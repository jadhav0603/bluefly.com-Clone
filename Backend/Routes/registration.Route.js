const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const user = require('../models/userModel')


router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {
        const existedUser = await user.findOne({ email });

        if (existedUser) {
            return res.status(400).json({ message: "User Already existed" })
        }

        const hashPass = await bcrypt.hash(password, 10)

        const NewUser = new user({ firstName, lastName, email, password: hashPass })
        await NewUser.save()

        const token = jwt.sign({ userID: NewUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
        res.status(201).json({ message: "User Register Successfully", token, user: NewUser });
    } catch (error) {
        res.status(500).json({ RegisterError: error.message })
    }
})

module.exports = router