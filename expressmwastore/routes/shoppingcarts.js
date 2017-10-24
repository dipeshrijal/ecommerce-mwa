var Shoppingcart = require('../controllers/shoppingcarts');
// API Server Endpoints
module.exports = function (router) {
    router.post('/shoppingcart', Shoppingcart.create),
        router.get('/shoppingcarts', Shoppingcart.get),
        router.put('/shoppingcarts/:id', Shoppingcart.update),
        router.delete('/shoppingcarts/:id', Shoppingcart.delete),
        router.post('/shoppingcart/items/:id', Shoppingcart.addItems),
        router.delete('/shoppingcart/items/:id', Shoppingcart.removeItems),
        router.put('/shoppingcart/items/:id', Shoppingcart.updateQuantity)


};