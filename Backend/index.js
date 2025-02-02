const express = require('express')
const mongoose = require('mongoose')
require ('dotenv').config()
const cors = require('cors')

const searchData = require('./Routes/NavbarSearch.Route')
const searchBarData = require('./Routes/searchBarData.Route')
const addProducts = require('./Routes/addProduct.Route')
const registration = require('./Routes/registration.Route')
const login = require('./Routes/login.Route')

const app = express()

const PORT = process.env.PORT || 3005

app.use(express.json())
app.use(cors())


app.get('/warmUp', async(req,res)=>{
    res.send('Backend warmed up!');
})



app.use('/', searchBarData)
app.use('/searchData', searchData)
app.use('/addProduct', addProducts)
app.use('/register',registration)
app.use('/login', login)



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