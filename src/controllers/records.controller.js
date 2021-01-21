const Records = require('../models/record.model')
exports.getRecords = async (req, res) => {

    console.log('req', req.body)
    return res.status(200).send('Records coming')
}