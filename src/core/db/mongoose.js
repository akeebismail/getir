/*
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
            //useCreateIndex: true,
            //useFindAndModify: false
        }).then(() => {
            mongoose.set('bufferCommands', false)
            resolve(mongoose.connection)
        }).catch(err => reject(err))
    })
}*/
const mongoose = require('mongoose')
const config = require('../../config')

const db = mongoose.createConnection(config.mongoURL, {
    keepAlive: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 0,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
db.then((conn) => {
    console.info(
        `MongoDB connected successfully to ${conn.host}:${conn.port}/${conn.db.databaseName}`,
    );
});

db.on('connected', () => {
    console.info('db connected');
});

module.exports = db