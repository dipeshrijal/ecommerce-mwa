'use strict';

var Product = require('../models/product').Product;

/** create product */
exports.create = function (req, res) {
    Product.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** get all products  */
exports.get= function (req, res) {
    Product.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update product . */
exports.update = function (req, res) {
    Product.updateById({_id : req.params.id}, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** delete  product  */
exports.delete = function (req, res) {
    Product.remove({_id: req.params.id}, function(err, result) {
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
    Product.find({category : req.params.category}, function(err, products){
        if(!err){
            return res.json(products);
        }else{
            console.log(err);
            return res.send(err);
        }
    })
}

