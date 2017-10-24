var Subcategory = require('../controllers/subcategories');
// API Server Endpoints
module.exports = function (router) {
    router.post('/subcategories', Subcategory.create),
    router.get('/subcategories', Subcategory.get),
    router.put('/subcategories/:id', Subcategory.update),
    router.delete('/subcategories/:id', Subcategory.delete)
  
};