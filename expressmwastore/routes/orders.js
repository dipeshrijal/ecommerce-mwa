var Order = require('../controllers/orders');
// API Server Endpoints
module.exports = function (router) {
    router.post('/orders', Order.create),
        router.get('/orders', Order.get),
        router.put('/orders/:id', Order.update),
        router.delete('/orders/:id', Order.delete)
  
};