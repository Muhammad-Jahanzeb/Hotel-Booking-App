const express = require('express')
const { registerUser, loginUser } = require('../controller/auth')
const routerAuth = express.Router()

routerAuth.post('/register', registerUser )

routerAuth.post('/login', loginUser)

module.exports = routerAuth