var Product = require('../controllers/products');
// API Server Endpoints
module.exports = function (router) {
        router.post('/products', Product.create),
        router.get('/products', Product.displayDetails),
        router.put('/products/:id', Product.update),
        router.delete('/products/:id', Product.delete),
        router.get('/products/subcategory', Product.findBySubcategory),
        router.get('/products/details', Product.displayDetails)
};