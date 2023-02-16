const express = require('express')
const app = express()
const userRoutes = require('../src/routes/user.routes')
const expressip = require('express-ip')
require('./database/connection')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(expressip().getIpInfoMiddleware)

app.use(userRoutes)
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
app.listen(8002, () => {
    console.log("server is up and running");
})