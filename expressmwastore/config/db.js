var Mongoose = require('mongoose');

Mongoose.connect('mongodb://127.0.0.1:27017/mwastore', {
    useMongoClient: true
});

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.on('open', function callback() {
    console.log('Connection with database succeeded.');
});

exports.db = db;