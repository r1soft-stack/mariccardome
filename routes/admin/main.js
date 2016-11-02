var express = require('express');
var router = express.Router();
var session = require('express-session');

if(!session.isLoggedIn)
    session.isLoggedIn = false;

// define the home page route
router.post('/api/login', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
    session.isLoggedIn = true;
});

router.use(function secure(req, res, next) {
    console.log(req.session);
    if(!req.session.isLoggedIn){
        res.render('auth', { title: 'MaRiccardo.me' });
    }else{
        next();
    }
});

// define the home page route
router.get('/', function(req, res) {
    res.render('index', { title: 'MaRiccardo.me' });
});

// define the about route
router.get('/users', function(req, res) {
    res.send('About users');
});

module.exports = router;