var Mongoose = require('mongoose');

Mongoose.connect('mongodb://deepakkc:Nevergiveup99@ds129315.mlab.com:29315/ecommerce-project', {
    useMongoClient: true
});

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.on('open', function callback() {
    console.log('Connection with database succeeded.');
});

exports.db = db;