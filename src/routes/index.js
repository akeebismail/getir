const express = require('express')
const router = express.Router()
const recordController = require('../controllers/records.controller')
const validate = require('../middleware/validate')
const {records} = require('../validations/records')
const responseHandler = require('../utils/responseHandle')
router.get('/', (req, res) => {
    return responseHandler.sendSuccess(res, {
        message: 'Success'
    })
})

router.post('/records/data', validate(records), recordController.getRecords)
module.exports = router;