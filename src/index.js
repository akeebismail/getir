const api = require('./core/express')
const router = require('./routes')
const db = require('./core/db/mongoose')
db.connect()
api.app.use(router)
api.initAPI();