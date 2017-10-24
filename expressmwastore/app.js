var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./config/db');

var app = express();
var router = express.Router();
app.use(router);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));

// routes binding

var index = require('./routes/index');
router.use('/', index);
require('./routes/shoppingcarts')(router);
require('./routes/users')(router);
require('./routes/categories')(router);
require('./routes/subcategories')(router);
require('./routes/products')(router);
// end routes bindings

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
