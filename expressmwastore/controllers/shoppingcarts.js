'use strict';

var ShoppingCart = require('../models/shoppingcart').Shoppingcart;

/** create shopping cart */
exports.create = function (req, res) {

    ShoppingCart.create(req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** get all shopping cart  */
exports.get = function (req, res) {

    ShoppingCart.get({}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

/** update shoppingcart . */
exports.update = function (req, res) {
    ShoppingCart.updateById({_id: req.params.id}, req.body, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });

};

exports.addItems = function (req, res) {
    var product = req.body.product;
    var quantity = req.body.quantity;
   var item= {
       "product":  req.body.product,
       "quantity": req.body.quantity
   }
    ShoppingCart.findOneAndUpdate({_id: req.params.id}, {$push: {items: item}}, {
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

exports.removeItems = function (req, res) {
    var product = req.body.product;
    ShoppingCart.findOneAndUpdate({_id: req.params.id}, {$pull: {items: product._id}}, {
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


exports.updateQuantity = function (req, res) {
    var product = req.body.product;
    ShoppingCart.findOneAndUpdate({_id: req.params.id}, {'items.id': product._id}, {
        '$set': {
            'items.$.quantity': req.body.product.quantity
        }
    }, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            return res.send(err);
        }
    });
}


// ShoppingCart.
// findOne({_id : req.params.id}).
// populate('items').
// exec(function (err, result) {
//     if(!err){
//         return res.json(result);
//     }else{
//         return res.send(err);
//     }
// });
/** delete  product  */
exports.delete = function (req, res) {
    ShoppingCart.remove({_id: req.params.id}, function (err, result) {
        if (! err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
};


exports.displayDetails= function (req, res){
    ShoppingCart.
    find().
    populate('product').
    exec(function (err, subcategories) {
        if (err) res.send(err);
        res.send(subcategories);
    });
}
exports.findByUser = function (req, res) {
    ShoppingCart.
    find({user: req.params.id}).
    populate('product').
    exec(function (err, subcategories) {
        if (err) res.send(err);
        res.send(subcategories);
    });
   
};


