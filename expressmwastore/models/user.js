
'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module users
 * @description contain the details of category information, conditions and actions.
 */
var Address =require('./address');
var UserSchema = new mongoose.Schema({
    firstName   : String,
    lastName   : String,
    gender: {type: String, enum: ['Male', 'Female']},
    dob    : {type: Date, default: Date.now},
    role : {type: String, enum: ['admin', 'customer']},
    address: {type: Address}
});

UserSchema.statics = {
    
        
    
        
        get: function (query, callback) {
            this.findOne(query, callback);
        },
    
       
        getAll: function (query, callback) {
            this.find(query, callback);
        },
    
        
        updateById: function (query, updateData, callback) {
            this.update(query, {$set: updateData}, callback);
        },
    
       
        delete: function (removeData, callback) {
            this.remove(removeData, callback);
        },
    
      
        create: function (data, callback) {
            var user = new this(data);
            user.save(callback);
        }
    };
    
  

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
    User: user
};