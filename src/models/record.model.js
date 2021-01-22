
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../core/db/mongoose')
const schema = new Schema({
    key: {
        type: String
    },
    value: {type: String},
    createdAt: {type: Date},
    counts: {type: Array}
},)
module.exports = db.model('Record', schema)
//module.exports = mongoose.model('Record', schema)