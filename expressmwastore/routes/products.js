var Product = require('../controllers/products');
// API Server Endpoints
module.exports = function (router) {
    router.post('/products', Product.create),
        // router.get('/products', Product.get),
        router.get('/products/:id', Product.findOne),
        router.post('/products', Product.create),
        router.get('/products', Product.displayDetails),
        router.put('/products/:id', Product.update),
        router.delete('/products/:id', Product.delete),
        router.get('/products/category/:id', Product.findBySubcategory),
        router.get('/products/categorydetails/:id', Product.findBySubcategoryDetail),
        router.get('/products/subcategory/:id', Product.findByCategory),
        router.get('/products/details', Product.displayDetails),
        router.post('/products/review/:id', Product.addComments)

};