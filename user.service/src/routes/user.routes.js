const express = require('express')
const router = express.Router()

const userService = require('../services/user.service')

router.get('/user-order/:id', userService.getUserOrder)



module.exports = router