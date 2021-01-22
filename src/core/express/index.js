const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const http = require('http')
const routes = require('../../routes')
const config = require('../../config')
const rawBodySaver = function (req, _res, buf, encoding) {
    if (buf && buf.length)req.rawBody = buf.toString(encoding || 'utf8');
}
const app = express()
app.use(cors())
app.use(bodyParser.json({limit: '50mb', verify: rawBodySaver}))
app.use(bodyParser.urlencoded({limit: '50mb', verify: rawBodySaver, extended: false}))

app.use(routes)
app.use((req, res) => {
    return res.status(404).send({
        code: 4,
        message: 'Resource not found'
    })
})

const api = http.createServer(app)
const initAPI = () => {
    api.listen(config.port, (err) => {
        if (err) {
            console.log(`API could not be start `, err)
            process.exit(-1)
        }
        console.log('API running on '+ config.port)

    })
}
module.exports = {
    api, initAPI
}