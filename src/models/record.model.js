const mongoose = require('mongoose')

const Schema = mongoose.Schema

const scheam = new Schema({
    key: {
        type: String
    },
    value: {type: String},
    createdAt: {type: Date},
    counts: {type: Array}
})

module.exports = mongoose.model('records', scheam)