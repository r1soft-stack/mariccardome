/**
 * Created by riccardomasetti on 10/11/16.
 */

var express = require('express');
var router = express.Router();
var session = require('express-session');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var app = express();

var env = app.get('env');

router.use(function secure(req, res, next) {
    if (!req.session.isLoggedIn && env != 'development') {
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
 * GET pages list
 */
router.get('/get', function (req, res, next) {

    MongoClient.connect('mongodb://localhost:27017/mariccardome', function (err, db) {

        if (err) {
            throw err;
        }

        db.collection('pages').find().toArray(function (err, result) {
            if (err) {
                throw err;
            }

            res.setHeader('Content-Type', 'application/json');
            res.send({title: 'MaRiccardo.me', pages: result});
        });
    });
});

/**
 * GET single page data
 */
router.post('/get-page', function (req, res, next) {

    MongoClient.connect('mongodb://localhost:27017/mariccardome', function (err, db) {

        if (err) {
            throw err;
        }

        var _id = req.body.pageid;

        db.collection('pages').find({"_id": new ObjectId(_id)}).toArray(function (err, result) {
            if (err) {
                throw err;
            }

            res.setHeader('Content-Type', 'application/json');
            res.send({title: 'MaRiccardo.me', pages: result});
        });
    });
});

module.exports = router;
