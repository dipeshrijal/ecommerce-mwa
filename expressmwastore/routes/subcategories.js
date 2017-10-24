var Subcategory = require('../controllers/subcategories');
// API Server Endpoints
module.exports = function (router) {
    router.post('/subcategory', Subcategory.create),
    router.get('/subcategories', Subcategory.get),
    router.put('/subcategory/:id', Subcategory.update),
    router.delete('/subcategory/:id', Subcategory.delete),
    router.get('/subcategory/category', Subcategory.findByCategory)
};