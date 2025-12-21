const express = require('express')
require ('dotenv').config()
const cors = require('cors')
const DBconnect = require('./config/db')


const searchData = require('./Routes/NavbarSearch.Route')
const searchBarData = require('./Routes/searchBarData.Route')
const addProducts = require('./Routes/addProduct.Route')
const registration = require('./Routes/registration.Route')
const login = require('./Routes/login.Route')
const deleteFav = require ('./Routes/deleteFavorite.Route')
const handleCarts = require('./Routes/handleCarts.Route')


const app = express()

const PORT = process.env.PORT || 3005

app.use(express.json())
app.use(cors())


app.get('/warmUp', (req,res)=>{
    res.send('Backend warmed up!');
})


app.use('/', searchBarData)
app.use('/searchData', searchData)
app.use('/addProduct', addProducts)
app.use('/register',registration)
app.use('/login', login)
app.use('/', deleteFav)
app.use('/handleCarts',handleCarts)



const startServer = async ()=>{
    await DBconnect()

    app.listen(PORT,()=>{
        console.log(`server successfully running on ${PORT} PORT`)   
})
}

startServer()