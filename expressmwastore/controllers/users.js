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

var User = require('../models/user').User;
var Order = require('../models/order').Order;


/** create category */
exports.create = function (req, res) {
    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            User.create(req.body, function (err, result) {
                if (! err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
        }
      });


   
};

/**   find by firstName */
exports.findByAccount = function (req, res) {

var username = req.body.username;
var password = req.body.password;
User.findOne({ 'username':username, 'password': password},  function (err, user) {
    if (!err){
        console.log(user);
        
        return res.send(user);
    }else{
        return res.send(err);
    }
  })

}
/** get all   */
exports.get = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            User.getAll({}, function (err, result) {
                if (! err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
        }
      });


  

};

/** update category . */
exports.update = function (req, res) {
    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            User.updateById({_id: req.params.id}, req.body, function (err, result) {
                if (! err) {
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
    Order.create(req.body.order, function(err, result) {
        if (!err) {
            User.findOneAndUpdate({_id: req.params.id}, {$push: {orders: result._id}}, {
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

