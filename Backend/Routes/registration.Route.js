const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

const registerModel = require('../models/registrationModel')


router.post('/', async(req, res)=>{
    const{firstName,lastName,email,password} = req.body

    try {
        const existedUser = await registerModel.findOne({email});

        if(existedUser){
            return res.status(400).json({message:"User Already existed"})
        }

        const hashPass = await bcrypt.hash(password, 10)

        const NewUser = new registerModel({firstName,lastName,email,password:hashPass})
        await NewUser.save()
        res.status(200).json({message:"User Register Successfully"})

    } catch (error) {
        res.status(400).json({RegisterError:error.message})
    }
})

module.exports = router