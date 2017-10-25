// var _ = require("lodash");
// var cors = require('cors');
// var express = require("express");
// var bodyParser = require("body-parser");
// var jwt = require('jsonwebtoken');
// var passport = require("passport");
// var passportJWT = require("passport-jwt");

// var ExtractJwt = passportJWT.ExtractJwt;
// var JwtStrategy = passportJWT.Strategy;


// var jwtOptions = {}
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// // Any random string to use as encryption key
// jwtOptions.secretOrKey = 'superSecretKey';


var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// router.post("/login", function(req, res) {
//     if(req.body.username && req.body.password){
//       var name = req.body.username;
//       var password = req.body.password;
//     }
//     // usually this would be a database call:
//     var user = User.findOne({ 'personalDeatails.firstName':name},  function (err, user) {
//         if (!err){
//             return res.json(user);
//         }else{
//             return res.send(err);
//         }
//       })

//     if( ! user ){
//       res.status(401).json({message:"no such user found"});
//     }
  
//     if(user.password === req.body.password) {
//       // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
//       var payload = {id: user.id};
//       var token = jwt.sign(payload, jwtOptions.secretOrKey);
//       res.json({message: "ok", token: token});
//     } else {
//       res.status(401).json({message:"passwords did not match"});
//     }
//   });
  
//   router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
//     res.json("Success! You can not see this without a token");
//   });
  

module.exports = router;