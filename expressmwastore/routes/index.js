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


var express = require('express');
var router = express.Router();
var User = require('../models/user').User;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/authenticate', function(req, res) {
  
   if(req.body.username && req.body.password){
         var username = req.body.username;
         var password = req.body.password;
       }
    // find the user
    User.findOne({ 'username':username, 'password': password}, function(err, user) {
  
      if (err) throw err;
  
      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
  
        // check if password matches
        if (user.password != req.body.password) {
          console.log(user.password);
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else{
          var payload = {id: user.id};
          var token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.json({message: "ok", token: token});
        }   
  
      }
     });
  });

  router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
    res.json("Success! You can not see this without a token");
  });
module.exports = router;