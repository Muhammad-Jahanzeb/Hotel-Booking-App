const express = require('express')
const cookieParser = require ('cookie-parser')
const config = require('./config/config')
const routerHotels = require('./routes/hotelRoutes')
const routerUsers = require('./routes/userRoutes')
const routerAuth = require('./routes/auth')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/',routerHotels)
app.use('/',routerUsers)
app.use('/',routerAuth)

port = process.env.PORT 

app.listen(port, ()=>{
    config(),
    console.log(`Server running at: http://localhost:${port}`)
})
