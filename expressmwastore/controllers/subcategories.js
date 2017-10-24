'use strict';

var Subcategory = require('../models/subcategory').SubCategory;

/** create subcategory */
exports.create = function (req, res) {
    Subcategory.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** get all subcategory  */
exports.get= function (req, res) {
    Subcategory.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update product . */
exports.update = function (req, res) {
    Subcategory.updateById({_id : req.params.id}, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** delete  product  */
exports.delete = function (req, res) {
    Subcategory.remove({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};

/** get  products by category  */

exports.findByCategory = function (req,res){
    Subcategory.find({category : req.params.category}, function(err, subcategories){
        if(!err){
            return res.json(subcategories);
        }else{
            console.log(err);
            return res.send(err);
        }
    })
}

