var Brand = require('../controllers/brands');
// API Server Endpoints
module.exports = function (router) {
    router.post('/brands', Brand.create),
        router.get('/brands', Brand.get),
        router.put('/brands/:id', Brand.update),
        router.delete('/brands/:id', Brand.delete)
  
};