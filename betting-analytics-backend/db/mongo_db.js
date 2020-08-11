const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/betting_analytics';

exports.connectToMongoDB = async() => {
    await mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

exports.disconnectFromMongoDB = async() => {
    await mongoose.connection.close();
}