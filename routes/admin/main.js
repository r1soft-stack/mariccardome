var express = require('express');
var router = express.Router();
var session = require('express-session');


router.post('/api/login', function(req, res) {
    req.session.isLoggedIn = true;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
});

router.post('/api/logout', function(req, res) {
    req.session.isLoggedIn = false;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 0 }, null, 3));
});

router.use(function secure(req, res, next) {
    if(!req.session.isLoggedIn){
        res.render('auth', { title: 'MaRiccardo.me' });
    }else{
        next();
    }
});

// define the home page route
router.get('/', function(req, res) {
    res.render('admin/index', { title: 'MaRiccardo.me' });
});

// define the about route
router.get('/users', function(req, res) {
    res.send('About users');
});

module.exports = router;