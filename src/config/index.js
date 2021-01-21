require('dotenv').config()
module.exports = {
    port: process.env.PORT || 5000,
    mongoURL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/getirdb',

}