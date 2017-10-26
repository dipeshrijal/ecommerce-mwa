'use strict';

var _ = require("lodash");
var cors = require('cors');
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;


var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// Any random string to use as encryption key
jwtOptions.secretOrKey = 'superSecretKey';

var Product = require('../models/product').Product;

/** create product */
exports.create = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            Product.create(req.body, function (err, result) {
                if (! err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
        }
      });


};

exports.findOne = function (req, res) {
    Product.findOne({_id: req.params.id},  function (err, result) {
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
    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            Product.updateById({_id: req.params.id}, req.body, function (err, result) {
                if (! err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
        }
      });


   

};

/** delete  product  */
exports.delete = function (req, res) {
    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            Product.remove({_id: req.params.id}, function (err, result) {
                if (! err) {
                    return res.json(result);
                } else {
                    console.log(err);
                    return res.send(err); // 500 error
                }
            });
        }
      });

  
};

/** get  products by subcategory  */

exports.findBySubcategory = function (req, res) {
    Product.find({subcategory: req.params.id}, function (err, products) {
        if (! err) {
            return res.json(products);
        } else {
            console.log(err);
            return res.send(err);
        }
    })
};


exports.findByCategory = function (req, res) {
    Product.find({}, function (err, products) {
        var productList = products.subcategory.category.id(req.params.id);
        if (! err) {
            return res.json(productList);
        } else {
            console.log(err);
            return res.send(err);
        }
    })
};


exports.findBySubcategoryDetail = function (req, res) {
    Product.
    find({subcategory: req.params.id}).
    populate('subcategory'). 
    populate({
        path: 'subcategory',
        populate: { path: 'category' }
      }). 
    populate('brand').
    exec(function (err, products) {
      if (err) res.send(err);
      res.send(products);
    });
};



exports.displayDetails= function (req, res){
    Product.
    find().
    populate('subcategory'). 
    populate({
        path: 'subcategory',
        populate: { path: 'category' }
      }). 
    populate('brand').
    exec(function (err, products) {
      if (err) res.send(err);
      res.send(products);
    });
}


exports.addComments = function (req, res) {
    var review = req.body.review;
    Product.findOneAndUpdate({_id: req.params.id}, {$push: {reviews: review}}, {
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
