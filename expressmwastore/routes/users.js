var User = require('../controllers/users');
// API Server Endpoints
module.exports = function (router) {
    router.post('/users', User.create),
    router.get('/users', User.get),
    router.put('/users/:id', User.update),
    router.delete('/users/:id', User.delete),
    router.post('/users/order/:id', User.addOrder),
    router.post('/users/login', User.findByAccount)
};