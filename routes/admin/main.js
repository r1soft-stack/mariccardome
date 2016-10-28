var express = require('express');
var router = express.Router();
var session = require('express-session');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.use(function secure(req, res, next) {
    if(!req.cookies.isLoggedIn){
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