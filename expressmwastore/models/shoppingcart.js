'use strict';

var product = require('./product');
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module shoppingcart
 * @description contain the details of shoppingcart information, conditions and actions.
 */

var ShoppingcartSchema = new Schema({
   createdAt :{type : Date},
   updatedAt :{type: Date},
   items: [{ type: Schema.Types.ObjectId, ref: 'product' }]


});

/**
 *
 * @type {{get: mongoose.Schema.statics.get, getAll: mongoose.Schema.statics.getAll, updateById: mongoose.Schema.statics.updateById, delete: mongoose.Schema.statics.delete, create: mongoose.Schema.statics.create}}
 */
ShoppingcartSchema.statics = {

    test: () => {
        console.log("test");
    },

    
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
        shoppingcart.save(callback);
    }
};

var shoppingcart = mongoose.model('shoppingcart', ShoppingcartSchema);

/** export schema */
module.exports = {
    Shoppingcart: shoppingcart
};