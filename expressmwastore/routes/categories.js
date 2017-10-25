var Category = require('../controllers/categories');
// API Server Endpoints
module.exports = function (router) {
    router.post('/categories', Category.create),
        router.get('/categories', Category.get),
        router.get('/categories/:id', Category.findOne),
        router.put('/categories/:id', Category.update),
        router.delete('/categories/:id', Category.delete),
        router.post('/categories/subcategories/:id', Category.addSubcategories),
        router.get('/categories/details', Category.displayDetails)

};