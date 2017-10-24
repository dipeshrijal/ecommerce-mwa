'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module category
 * @description contain the details of category information, conditions and actions.
 */

var CategorySchema = new Schema({
    name : {type: String},
    description: {type: String}


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