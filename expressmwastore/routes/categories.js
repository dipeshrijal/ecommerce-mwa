var Category = require('../controllers/categories');
// API Server Endpoints
module.exports = function (router) {
    router.post('/category', Category.create),
    router.get('/categories', Category.get),
    router.put('/category/:id', Category.update),
    router.delete('/category/:id', Category.delete)
  
};