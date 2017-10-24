'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module subcategories
 * @description contain the details of category information, conditions and actions.
 */

var SubCategorySchema = new Schema({
    name : {type: String},
    description: {type: String}

});

SubCategorySchema.statics = {
    
        
    
        
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
            var shoppingcart = new this(data);
            SubCategorySchema.save(callback);
        }
    };
    
  

var subcategories = mongoose.model('subcategory', SubCategorySchema);

/** export schema */
module.exports = {
    SubCategory: subcategories
};