'use strict';
var Subcategory = require('../models/subcategory').Subcategory;
var Category = require('../models/category').Category;

/** create category */
exports.create = function (req, res) {
    Category.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** get all categories  */
exports.get= function (req, res) {
    Category.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update category . */
exports.update = function (req, res) {

    Category.updateById({_id : req.params.id}, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** delete  category  */
exports.delete = function (req, res) {
    Category.remove({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};


exports.addSubcategories = function (req, res) {


    Subcategory.create(req.body.subcategory, function(err, result) {
        if (!err) {
            Category.findOneAndUpdate({_id: req.params.id}, {$push: {subcategories: result._id}}, {
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


exports.displayDetails= function (req, res){
    Category.
    find().
    populate('subcategories').
    exec(function (err, subcategories) {
        if (err) res.send(err);
        res.send(subcategories);
    });
}

