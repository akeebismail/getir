const Records = require('../models/record.model')
exports.getRecords = async (req, res) => {
    let {startDate, endDate, minCount, maxCount} = req.body
    let records = await Records.aggregate([
        {$match: {createdAt: {$gte: new Date(startDate), $lte: new Date(endDate)}}},
        {$unwind: '$counts'},
        {$group: {
            _id: '$_id',
            totalCounts: {
                $sum: '$counts'
            }
        }},
        {$match: {
            totalCounts: {$gte: minCount, $lte: maxCount}
            }}
    ])
    return res.status(200).send(records)
}