const express = require('express')
const router = express.Router()
const recordController = require('../controllers/records.controller')
router.get('/', (req, res) => {
    return res.send('Getir API running...')
})

router.post('/data', recordController.getRecords)
module.exports = router;