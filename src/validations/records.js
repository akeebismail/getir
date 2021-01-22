const BaseJoi = require('joi')
const DateJoi = require('@hapi/joi-date')
const Joi = BaseJoi.extend(DateJoi)
module.exports = {
    records: Joi.object({
        startDate: Joi.date().format(['YYY-MM-DD']).required(),
        endDate: Joi.date().format('YYYY-MM-DD').required(),
        minCount: Joi.number().integer().strict().required(),
        maxCount: Joi.number().integer().strict().required()
    })
}