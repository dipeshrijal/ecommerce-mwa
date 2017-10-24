'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module order
 * @description contain the details of orders information, conditions and actions.
 */

var OrderSchema = new Schema({
    cart :  {type: Schema.Types.ObjectId, ref: 'shoppingcart'},
    customerDetails:  {type: Schema.Types.ObjectId, ref: 'user'},
    dateCreated: {type: Date},
    dateShipped: {type: Date},
    status: {type: String}


});

CategorySchema.statics = {
    
        
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
            var category = new this(data);
            category.save(callback);
        }
    };
    
  

var category = mongoose.model('category', CategorySchema);

/** export schema */
module.exports = {
    Category: category
};