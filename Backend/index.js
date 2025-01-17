const express = require('express')
const mongoose = require('mongoose')
require ('dotenv').config()
const cors = require('cors')

const searchData = require('./Routes/NavbarSearch.Route')
const searchBarData = require('./Routes/searchBarData.Route')

const app = express()

const PORT = process.env.PORT || 3005

app.use(express.json())
app.use(cors())

app.use('/', searchBarData)
app.use('/searchData', searchData)


app.listen(PORT, async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        try {
            console.log('successfully connected to MONGO DB server')
        } catch (error) {
            console.log("MONGO_DB_error= ",error.message)
        }

        console.log(`server successfully running on ${PORT} PORT`)
        
    } catch (error) {
        console.log(error.message)
    }
})