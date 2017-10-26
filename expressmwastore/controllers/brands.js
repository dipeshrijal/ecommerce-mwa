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



var Brand = require('../models/brand').Brand;

/** create brand */
exports.create = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            Brand.create(req.body, function(err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
        }
      });

   
};

/** get all brands  */
exports.get= function (req, res) {
    Brand.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update brand . */
exports.update = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Access Denied")
        }else{
            Brand.updateById({_id : req.params.id}, req.body, function(err, result) {
                if (!err) {
                    return res.json(result);
                } else {
                    return res.send(err); // 500 error
                }
            });
        }
      });
   

};

/** delete  brand  */
exports.delete = function (req, res) {

    jwt.verify(req.headers.token,jwtOptions.secretOrKey, function(err, token){
        if(err){
         return res.send("Acess Denied")
        }else{
            Brand.remove({_id: req.params.id}, function(err, result) {
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




