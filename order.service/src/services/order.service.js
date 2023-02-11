
// const axios = require('axios')
const con = require('../database/connection')
const mysql = require('mysql')
const { queryExecute } = require('../sqlquery/sqlquery.executor')
// const { SQLQUERYSTRING } = require('../sqlquery/sql.querystring')
// const { successfulResponse } = require('../utils/common')
// const { getDataFromOtherService } = require('../service.communication/service.communication')

const getOrderDetails = async (req, res, next) => {
    console.log("=====req", req.params.id)
    const userID = req.params.id
    try {

        const sqlSearch = `SELECT * FROM order_table WHERE user_id = ?`;
        const search_query = mysql.format(sqlSearch, userID)

        // console.log("🚀 ~ file: order.service.js:16 ~ getOrderDetails ~ sqlSearch", sqlSearch)
        const data = await queryExecute(search_query)
        // console.log("🚀 ~ file: order.service.js:20 ~ getOrderDetails ~ data", data)

        if (data.length > 0) {
            return res.send({
                message: "this is from order service",
                data: data
            })
        }
    } catch (error) {

    }
    // return res.send({
    //     message: "this is from order service",
    //     // data:req
    // })
}

const createOrder = async (req, res, next) => {
    const { user_id, order_name } = req.body
    try {
        const sqlInsert = `INSERT INTO order_table (user_id, order_name) VALUES(${user_id}, '${order_name}')`
        const insert_query = mysql.format(sqlInsert)

        const data = await queryExecute(insert_query)
        console.log("🚀 ~ file: order.service.js:44 ~ createOrder ~ data", data)
        return res.status(200).send({
            message: "order created successfully"
        })
    } catch (error) {
        return res.status(500).send({
            message: "Internal server error"
        })
    }
}

module.exports = {
    getOrderDetails, createOrder
}