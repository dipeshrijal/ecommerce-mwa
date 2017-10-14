'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module product
 * @description contain the details of product information, conditions and actions.
 */

var ProductSchema = new Schema({
    name : {type: String},
    price: {type: Number}
});

/**
 *
 * @type {{get: mongoose.Schema.statics.get, getAll: mongoose.Schema.statics.getAll, updateById: mongoose.Schema.statics.updateById, delete: mongoose.Schema.statics.delete, create: mongoose.Schema.statics.create}}
 */
ProductSchema.statics = {

    /**
     findOneproduct. return the one product object.
     @param query: get id to find one company by id.
     @param callback: callback of this form.
     */
    get: function (query, callback) {
        this.findOne(query, callback);
    },

    /**
     findallproducts. return the product objects.
     @param query: get empty object to find all
     @param callback: callback of this form.
     */
    getAll: function (query, callback) {
        this.find(query, callback);
    },

    /**
     updateproduct. return the updated object result.
     @param query: object matcing key and value to delete
     @param updateData: updateData is use to update company w.r.t id.
     @param callback: callback of this form.
     */
    updateById: function (query, updateData, callback) {
        this.update(query, {$set: updateData}, callback);
    },

    /**
     *
     * @param removeData: data to be replaced
     * @param callback: callback of this form
     */
    delete: function (removeData, callback) {
        this.remove(removeData, callback);
    },

    /**
     *
     * @param data: form data to create new document
     * @param callback: callback for this form
     */
    create: function (data, callback) {
        var company = new this(data);
        company.save(callback);
    }
};

var product = mongoose.model('product', ProductSchema);

/** export schema */
module.exports = {
    Product: product
};