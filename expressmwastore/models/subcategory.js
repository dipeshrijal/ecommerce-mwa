'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module subcategory
 * @description contain the details of subcategory information, conditions and actions.
 */

var SubcategorySchema = new Schema({
    name : {type: String},
    description: {type: String}
  


});

SubcategorySchema.statics = {
    
        
    
        
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
            var subcategory = new this(data);
            subcategory.save(callback);
        }
    };
    
  

var subcategory = mongoose.model('subcategory', SubcategorySchema);

/** export schema */
module.exports = {
    Subcategory: subcategory
};