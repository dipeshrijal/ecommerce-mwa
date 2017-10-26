var Subcategory = require('../controllers/subcategories');
// API Server Endpoints
module.exports = function (router) {
    router.post('/subcategories', Subcategory.create),
    router.get('/subcategories', Subcategory.get),
    router.put('/subcategories/:id', Subcategory.update),
    router.delete('/subcategories/:id', Subcategory.delete),
    router.get('/subcategories/category', Subcategory.findByCategory),
    router.post('/subcategories/product/:id', Subcategory.addProducts),
    router.get('/subcategories/:id', Subcategory.findOne)
    
};