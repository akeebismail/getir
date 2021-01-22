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
db.on('disconnected', (err) => {
    console.info(`Mongodb disconnect - ${err}`)
})

module.exports = db