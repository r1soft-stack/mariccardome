var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;

/**
 * Bcrypt return true or false
 */
router.post('/api/login', function (req, res) {

    res.setHeader('Content-Type', 'application/json');

    if (!Object.keys(req.body).length) {
        return res.send(JSON.stringify({err:'Incomplete form'}, null, 3));
    }

    MongoClient.connect('mongodb://localhost:27017/mariccardome', function (err, db) {

        if (err) {
            throw err;
        }

        if(!req.body.email || !req.body.password){
            return res.send(JSON.stringify({err:'Incomplete form'}, null, 3));
        }

        db.collection('users').findOne({email: req.body.email}, function (err, result) {
            if (err) {
                throw err;
            }

            //TODO Let's assume it's stored in a variable called `hash`
            var loginCompare = bcrypt.compareSync(req.body.password, result.password);

            if (loginCompare)
                req.session.isLoggedIn = true;

            res.send(JSON.stringify({redirect: '/admin'}, null, 3));
        });
    });

});

router.post('/api/logout', function (req, res) {
    req.session.isLoggedIn = false;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({redirect: '/admin'}, null, 3));
});

router.use(function secure(req, res, next) {
    if (!req.session.isLoggedIn) {
        res.render('auth', {title: 'MaRiccardo.me'});
    } else {
        next();
    }
});

// define the home page route
router.get('/', function (req, res) {
    res.render('admin/index', {title: 'MaRiccardo.me', section:'admin'});
});

module.exports = router;