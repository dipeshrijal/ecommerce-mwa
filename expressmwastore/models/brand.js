'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module brand
 * @description contain the details of brand information, conditions and actions.
 */

var BrandSchema = new Schema({
    name : {type: String},
    description: {type: String}

});