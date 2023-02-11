const express = require('express')
const proxy = require('express-http-proxy')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', proxy('http://localhost:8002'))//
app.use('/order', proxy('http://localhost:8001'))

app.listen(8000, () => {
    console.log("server is up and running");
})