'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module brand
 * @description contain the details of brand information, conditions and actions.
 */

var AddressSchema = new Schema({
    street : {type: String},
    city: {type: String},
    zipcode: {type: Number},
    country: {type: String}

});