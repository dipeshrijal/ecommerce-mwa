'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

/**
 * @module category
 * @description contain the details of category information, conditions and actions.
 */

var CategorySchema = new Schema({
    name : {type: String}

});


var category = mongoose.model('category', CategorySchema);

/** export schema */
module.exports = {
    Category: category
};