const mongoose = require('mongoose')
require('dotenv').config()

const DBconnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('successfully connected to MONGO DB server')
    }
    catch(error){
        console.error("Database connecting failed")
        process.exit(1)
    }
}

module.exports = DBconnect