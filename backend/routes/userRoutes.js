const express = require('express')
const { getAll, updateUser, deleteUser, getOne } = require('../controller/users')
const {verifyToken} = require('../utils/verifyToken')

const router = express.Router()

router.get('/users', verifyToken, getAll)

router.put('/hotel/:id',updateUser).delete('/hotel/:id',deleteUser).get('/hotel/:id',getOne)


module.exports = router
