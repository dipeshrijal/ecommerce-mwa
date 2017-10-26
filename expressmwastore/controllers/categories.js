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

jwtOptions.secretOrKey = 'superSecretKey';


var Subcategory = require('../models/subcategory').Subcategory;
var Category = require('../models/category').Category;

/** create category */
exports.create = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            Category.create(req.body, function(err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
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
    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Acess Denied")
        }else{
            Category.updateById({_id : req.params.id}, req.body, function(err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
        
        }
      });
    
};

/** delete  category  */
exports.delete = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("error")
        }else{
            Category.remove({_id: req.params.id}, function(err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    console.log(err);
                    return res.send(err); // 500 error
                }
            });
        }
      });

   
};


/** * find by id */
 exports.findOne = function (req, res) {
    Category.findOne({_id: req.params.id},  function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};


exports.addSubcategories = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            var subcategory = {
                "name" : req.body.name,
                "description": req.body.description,
                "category": req.params.id
            }
        
            Subcategory.create(subcategory, function(err, result) {
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
      });

   
}


exports.displayDetails = function (req, res){
    Category.
    find().
    populate('subcategories').
    exec(function (err, categories) {
        if (err) res.send(err);
        res.send(categories);
    });

}

