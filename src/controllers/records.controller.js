const Records = require('../models/record.model')
const responseHandler = require('../utils/responseHandle')
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
        return responseHandler.sendSuccess(res, {
            status: 200,
            message: 'Success',
            data: records
        })
    }catch (e) {
        return responseHandler.sendError(res, {
            status: 500,
            message: 'Internal server error.'
        })
    }
}