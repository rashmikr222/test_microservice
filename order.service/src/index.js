const express = require('express')
const app = express()

require('./database/connection')
const orderRouter = require('../src/routes/order.routes')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(orderRouter)
app.use((error, req, res, next) => {
    let status = error.status || 500
    let message = error.message || "internal server error"
    console.log("🚀 ~ file: express-app.js:22 ~ app.use ~ error", status, message)
    // res.status(status).send(message)
    res.send({
        status: status,
        message: message
    })
})

app.listen(8001, () => {
    console.log("server is up and running");
})