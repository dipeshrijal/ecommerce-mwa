var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.route('/')
    .get(function (req, res) {
        User.find({}, function (err, data) {
            if (err) res.send("Invalid Id");
            res.send(data);
        });
    })
    .post(function (req, res) {
        const user = new User({
            name   : req.body.name,
            badge  : req.body.badge,
            isloved: req.body.isloved
        });
        user.save(function (err) {
            if (err) res.send("Invalid Id");
            res.send(user);
        });
    });

router.delete('/:id', function (req, res) {
    res.send(req.params.id);
});


module.exports = router;

