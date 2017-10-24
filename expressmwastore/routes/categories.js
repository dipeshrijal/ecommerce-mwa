var Category = require('../controllers/categories');
// API Server Endpoints
module.exports = function (router) {
    router.post('/categories', Category.create),
    router.get('/categories', Category.get),
    router.put('/categories/:id', Category.update),
    router.delete('/categories/:id', Category.delete)
  
};