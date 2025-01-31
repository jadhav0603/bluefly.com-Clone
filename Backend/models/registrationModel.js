const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Admin","User"],
        default:"User",
        required:true
    }

})

const registrationModel = mongoose.model("registration",registrationSchema)

module.exports = registrationModel