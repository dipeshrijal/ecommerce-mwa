'use strict';

var Product = require('../models/product').Product;

/** create product */
exports.create = function (req, res) {
    Product.create(req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** get all products  */
exports.get = function (req, res) {
    Product.getAll({}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update product . */
exports.update = function (req, res) {
    Product.updateById({_id: req.params.id}, req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** delete  product  */
exports.delete = function (req, res) {
    Product.remove({_id: req.params.id}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};

/** get  products by subcategory  */

exports.findBySubcategory = function (req, res) {
    Product.find({subcategory: req.params.subcategory}, function (err, products) {
        if (! err) {
            return res.json(products);
        } else {
            console.log(err);
            return res.send(err);
        }
    })
}



exports.displayDetails= function (req, res){
    Product.
    find().
    populate('subcategory'). 
    exec(function (err, products) {
      if (err) res.send(err);
      res.send(products);
    });
}


