const mongoose = require('mongoose')
const config = require('../../config')
mongoose.connection.on('connected', () => {
    console.log('Getir API Db connected !!!')
})

mongoose.connection.on('disconnected', (err) => {
    console.warn(`Getir Db disconnect from MongoDB via Mongoose because of ${err}`)
})

mongoose.connection.on('error', (err) => {
    console.log(`Could not connect to Getir DB because of ${err}`)
    process.exit(-1)
})

exports.connect = () => {
    let mURL = config.mongoURL
    return new Promise((resolve, reject) => {
        mongoose.connect(mURL, {
            poolSize: 10,
            keepAlive: 1,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
            //  useUnifiedTopology: true
        }).then(() => {
            resolve(mongoose.connection)
        }).catch(err => reject(err))
    })
}