'use strict';

var Order = require('../models/order').Order;

/** create order */
exports.create = function (req, res) {
    Order.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** get all orders  */
exports.get= function (req, res) {
    Order.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update order . */
exports.update = function (req, res) {
    Order.updateById({_id : req.params.id}, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** delete  order  */
exports.delete = function (req, res) {
    Order.remove({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};






