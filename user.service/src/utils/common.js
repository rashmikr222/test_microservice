const createErrors = require("http-errors")

const successfulResponse = (message, payload = null) => {
    return {
        message,
        ...(payload ? {payload} : null)
    }
}

module.exports = {
    successfulResponse,
    createErrors
}