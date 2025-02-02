const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const router = express.Router()

const User = mongoose.model("User", new mongoose.Schema({
    email: String,
    password: String,
}));

router.post('/', async(req,res)=>{
    const {email,password} = req.body

    try {

        const existed = await User.findOne({email})
        if(!existed){
            return res.status(404).json("user not exists")
        }    

        const passMatch = await bcrypt.compare(password, existed.password)
        if(!passMatch){
            return res.status(404).json("Password Incorrect")
        }
        
        const token = jwt.sign({userID:existed._id}, process.env.SECRET_KEY,{expiresIn:"1h"})
        return res.status(200).json({message:"login successful", token})
        
    } catch (error) {
        res.status(500).json({login_error:error.message})
    }
})


module.exports = router