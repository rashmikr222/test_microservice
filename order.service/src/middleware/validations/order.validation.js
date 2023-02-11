
const createErrors = require('http-errors')
const { yup } = require('../../utils/common')

const createrOrderValidation = async (req, res, next) => {
    try {
        // const { user_id, order_name } = req.body
        const validation = yup.object({
            user_id: yup.number().required('user id required'),
            order_name: yup.string().required('order_name required')
        })
        validation.validateSync(req.body)
        // const errorMessage = user_id === "" ? "user id required" : (order_name === "" ? "order name required" : null)
        // if (errorMessage) {
        //     return next(createErrors.BadRequest(errorMessage))
        // }
        next()
    } catch (error) {
        error = error.inner ? createErrors.BadRequest(error.errors[0]) : createErrors.InternalServerError('internal server error order validation')
        // console.log("🚀 ~ file: common.validation.js:10 ~ createrOrderValidation ~ error", error)
        return next(error)

    }
}

const getOrderValidation = (req, res, next) => {
    try {
        // console.log("inside get order validation");
        if (req.params.id === ":id") {
            return next(createErrors.BadRequest("id required"))
        }
        next()

    } catch (error) {
        error = createErrors.InternalServerError('Internal server error,order validation')
        // console.log("🚀 ~ file: order.validation.js:36 ~ getOrderValidation ~ error", error)
        return next(error)

    }
}

module.exports = { createrOrderValidation, getOrderValidation }