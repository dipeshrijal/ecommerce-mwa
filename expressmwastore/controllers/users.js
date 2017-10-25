'use strict';

var User = require('../models/user').User;

/** create category */
exports.create = function (req, res) {
    User.create(req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/**   find by firstName */
exports.findByAccount = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.find({'credential.username': username, 'credential.password': password}, function (err, user) {
        if (! err) {
            return res.json(user);
        } else {
            return res.send(err);
        }
    })
}
/** get all categories  */
exports.get = function (req, res) {
    User.getAll({}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update category . */
exports.update = function (req, res) {
    User.updateById({_id: req.params.id}, req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** delete  category  */
exports.delete = function (req, res) {
    User.remove({_id: req.params.id}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};


exports.addOrder = function (req, res) {
    var order = req.body.order;
    User.findOneAndUpdate({_id: req.params.id}, {$push: {orders: order}}, {
        safe  : true,
        upsert: true
    }, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
}


