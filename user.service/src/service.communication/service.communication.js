
const axios = require('axios')

const getDataFromOtherService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const responseData = await axios.get(`http://localhost:8001/getOrderDetails/${id}`)
            resolve(responseData)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { getDataFromOtherService }