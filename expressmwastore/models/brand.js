'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module brand
 * @description contain the details of brand information, conditions and actions.
 */

var BrandSchema = new Schema({
    name : {type: String},
    description: {type: String},
    image: [{type: String}]

});

BrandSchema.statics = {
    
        /**
         findOnebrand. return the one brand object.
         @param query: get id to find one brand by id.
         @param callback: callback of this form.
         */
        get: function (query, callback) {
            this.findOne(query, callback);
        },
    
        /**
         findallbrands. return the brand objects.
         @param query: get empty object to find all
         @param callback: callback of this form.
         */
        getAll: function (query, callback) {
            this.find(query, callback);
        },
    
        /**
         updatebrand. return the updated object result.
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
            var brand = new this(data);
            brand.save(callback);
        }
    };
    


var brand = mongoose.model('brand', BrandSchema);
/** export schema */
module.exports = {
    Brand: brand
};