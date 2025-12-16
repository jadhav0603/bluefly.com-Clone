const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const compression = require("compression");
const helmet = require('helmet')

const searchData = require('./Routes/NavbarSearch.Route')
const searchBarData = require('./Routes/searchBarData.Route')
const addProducts = require('./Routes/addProduct.Route')
const registration = require('./Routes/registration.Route')
const login = require('./Routes/login.Route')
const deleteFav = require('./Routes/deleteFavorite.Route')
const handleCarts = require('./Routes/handleCarts.Route')


const app = express()

const PORT = process.env.PORT || 3005

app.use(express.json())
app.use(cors())
app.use(compression());
app.use(helmet())


app.get('/warmUp', async (req, res) => {
    res.send('Backend warmed up!');
})


app.use('/', searchBarData)
app.use('/searchData', searchData)
app.use('/addProduct', addProducts)
app.use('/register', registration)
app.use('/login', login)
app.use('/', deleteFav)
app.use('/handleCarts', handleCarts)



app.listen(PORT, async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }
        await mongoose.connect(process.env.MONGO_URL)
        try {
            console.log('successfully connected to MONGO DB server')
        } catch (error) {
            console.log("MONGO_DB_error= ", error.message)
        }

        console.log(`server successfully running on ${PORT} PORT`)

    } catch (error) {
        console.log(error.message)
    }
})