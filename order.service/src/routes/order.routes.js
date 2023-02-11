const express = require('express')
const router = express.Router()

const orderService = require('../services/order.service')
const { createrOrderValidation, getOrderValidation } = require('../middleware/validations/order.validation')

// get order details by userid
router.get('/getOrderDetails/:id', getOrderValidation, orderService.getOrderDetails)
// create order
router.post('/create-order', createrOrderValidation, orderService.createOrder)


module.exports = router