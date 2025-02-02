const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const user = require('../models/userModel')
require('dotenv').config()

const router = express.Router()


router.post('/', async(req,res)=>{
    const {email,password} = req.body

    try {
        const userExisted = await user.findOne({email})

        if(!userExisted){
            return res.status(404).json("user not found")
        }    

        const passMatch = await bcrypt.compare(password, userExisted.password)

        if(!passMatch){
            return res.status(400).json("Password Incorrect")
        }
        
        const token = jwt.sign({userID:userExisted._id}, process.env.SECRET_KEY,{expiresIn:"1h"})
        return res.status(200).json({message:"login successful", token, userExisted})
        
    } catch (error) {
        res.status(500).json({login_error:error.message})
    }
})


module.exports = router