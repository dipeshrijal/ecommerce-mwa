var Shoppingcart = require('../controllers/shoppingcarts');
// API Server Endpoints
module.exports = function (router) {
    router.post('/shoppingcarts', Shoppingcart.create),
        router.get('/shoppingcarts', Shoppingcart.get),
        router.put('/shoppingcarts/:id', Shoppingcart.update),
        router.delete('/shoppingcarts/:id', Shoppingcart.delete),
        router.post('/shoppingcarts/items/:id', Shoppingcart.addItems),
        router.delete('/shoppingcarts/items/:id', Shoppingcart.removeItems),
        router.put('/shoppingcarts/items/:id', Shoppingcart.updateQuantity),
        router.get('/shoppingcarts/details', Shoppingcart.displayDetails),
        router.get('/shoppingcarts/user/:id', Shoppingcart.findByUser)



};