const Records = require('../models/record.model')
exports.getRecords = async (req, res) => {
    try {
        let {startDate, endDate, minCount, maxCount} = req.body

        let records = await Records.aggregate([
            {
                $match: {
                    createdAt: {$gt: new Date(startDate), $lte: new Date(endDate)}
                }
            },
            //{$unwind: '$counts'},
            {
                $project: {
                    key: true,
                    createdAt: true,
                    _id: false,
                    totalCount: {
                        $sum: '$counts'
                    }
                }
            },
            {
                $match: {
                    totalCount: {$gt: minCount, $lte: maxCount}
                }
            }
        ])
        return res.status(200).send(records)
    }catch (e) {
        console.log(e)
        return res.status(500).send('internal server error')
    }
}