
const { queryExecute } = require('../sqlquery/sqlquery.executor')
const { SQLQUERYSTRING } = require('../sqlquery/sql.querystring')
const { successfulResponse, createErrors } = require('../utils/common')
const { getDataFromOtherService } = require('../service.communication/service.communication')

const getUserOrder = async (req, res, next) => {
    const userID = req.params.id
    console.log("user service", userID)
    try {
        const sqlSearch = SQLQUERYSTRING.SELECT.replace(':userID', userID)
        const data = await queryExecute(sqlSearch)

        if (data.length > 0) {
            const responseData = await getDataFromOtherService(userID)
            // responseData is data comming from order service
            const orderData = responseData.data

            const orderResult = orderData.data.map(async (val) => {
                const userID = val.user_id
                const search_query = `SELECT * FROM user_info WHERE id = ${userID}`
                const userData = await queryExecute(search_query)
                return { ...val, userData: userData[0] }
            })
            const finalResult = await Promise.all(orderResult)

            return res.status(200).send(successfulResponse('successful', finalResult))
        }
        else {
            return next(createErrors.NotFound('user not found'))
        }
    } catch (error) {
        console.log("🚀 ~ file: user.service.js:33 ~ getUserOrder ~ error", error)

    }

}


module.exports = {
    getUserOrder
}