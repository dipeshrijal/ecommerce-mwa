'use strict';

var Product = require('../models/product').Product;

/** create function to create Company. */
exports.create = function (req, res) {
    Product.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getCompany function to get Company by id. */
exports.get = function (req, res) {
    // Company.get({_id: req.params.id}, function(err, result) {
    //     if (!err) {
    //         return res.json(result);
    //     } else {
    //         return res.send(err); // 500 error
    //     }
    // });

    Product.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** updateCompany function to get Company by id. */
exports.update = function (req, res) {
    Product.updateById({_id : req.params.id}, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** removeCompany function to get Company by id. */
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