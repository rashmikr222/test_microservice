const express = require('express')
const router = express.Router()

const orderService = require('../services/order.service')

router.get('/getOrderDetails/:id', orderService.getOrderDetails)
router.post('/create-order', orderService.createOrder)


module.exports = router