'use strict';

var Subcategory = require('../models/subcategory').Subcategory;
var Product = require('../models/product').Product;
/** create category */
exports.create = function (req, res) {
    Subcategory.create(req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** get all categories  */
exports.get = function (req, res) {
    Subcategory.getAll({}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update category . */
exports.update = function (req, res) {
    Subcategory.updateById({_id: req.params.id}, req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** delete  category  */
exports.delete = function (req, res) {
    Subcategory.remove({_id: req.params.id}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};


exports.findByCategory = function (req, res) {
    Subcategory
        .find()
        .populate('category')
        .exec(function (err, subcategories) {
            if (err) res.send(err);
            res.send(subcategories);
        }).catch(function (err) {
        console.log(err);
    });
};

exports.addProducts = function (req, res) {
    Product.create(req.body.product, function (err, result) {
        if (! err) {
            Subcategory.findOneAndUpdate({_id: req.params.id}, {$push: {products: result._id}}, {
                safe  : true,
                upsert: true
            }, function (err, result) {
                if (! err) {
                    return res.json(result);
                } else {
                    return res.send(err);
                }
            });

        } else {
            return res.send(err); // 500 error
        }

    });
}


/** * find by id */
exports.findOne = function (req, res) {
    Subcategory.findOne({_id: req.params.id}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};