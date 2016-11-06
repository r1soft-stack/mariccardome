var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;


router.use(function secure(req, res, next) {
    if (!req.session.isLoggedIn) {
        res.render('auth', {title: 'MaRiccardo.me'});
    } else {
        next();
    }
});


router.post('/insert', function (req, res, next) {
    //TODO check the user existence onto mongo
    var params = req.body;
    var hash = bcrypt.hashSync(params.password, 10);
    //TODO save the user and his credentials onto mongo
    //TODO send the response of creation (failure or success)
    res.send(hash);
});

/**
 * GET users list
 */
router.get('/', function (req, res, next) {

    MongoClient.connect('mongodb://localhost:27017/mariccardome', function (err, db) {

        if (err) {
            throw err;
        }

        db.collection('users').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }

            res.render('admin/users', {title: 'MaRiccardo.me', users: result});
        });
    });
});

module.exports = router;
