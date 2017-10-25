var Product = require('../controllers/products');
// API Server Endpoints
module.exports = function (router) {
    router.post('/products', Product.create),
        router.get('/products', Product.get),
        router.get('/products/:id', Product.findOne),
        router.put('/products/:id', Product.update),
        router.delete('/products/:id', Product.delete)
    router.get('/products/category', Product.findByCategory)
};