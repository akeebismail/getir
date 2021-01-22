const express = require('express')
const router = express.Router()
const recordController = require('../controllers/records.controller')
const validate = require('../middleware/validate')
const {records} = require('../validations/records')
router.get('/', (req, res) => {
    return res.send('Getir API running...')
})

router.post('/data', validate(records), recordController.getRecords)
module.exports = router;