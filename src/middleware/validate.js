const Joi = require('joi')
const responseHandle = require('../utils/responseHandle')
const validate = (schema, body = 'body') => {
    return (req, res, next) => {
        const {error} = schema.validate(req[body],{abortEarly: false,allowUnknown: true})
        const valid = error == null
        if (valid){
            next()
        } else{
            const {details} = error
            const message = details.map(i => i.message && i.message.replace(/['"]/g, '').replace(/mongo/g, '')).join(' and ')
            return responseHandle.sendError(res,{
                status: 422,
                message
            })
        }
    }
}

module.exports = validate;