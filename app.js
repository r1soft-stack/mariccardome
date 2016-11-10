var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//configurations
var config = require('./config');

var routes = require('./routes/index');

// main admin routing group
var admin = require('./routes/admin/main');
var users = require('./routes/admin/users');
var pages = require('./routes/admin/pages');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('env', 'development');
app.set('json spaces', 40);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: '$1$C2KITuS6$WQb6vrWH8vL2INBnY6ah21'}));
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');


app.use('/', routes);

app.use('/admin', admin);
app.use('/admin/users', users);
app.use('/admin/pages', pages);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

app.listen(8080, function () {
    console.log('Example app listening on port 80!');
});
