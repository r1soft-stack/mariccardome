var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');



router.post('/insert', function(req, res, next){

  //TODO check the user existence onto mongo
  var params = req.params();
  var hash = bcrypt.hashSync(params.password, 10);
  //TODO save the user and his credentials onto mongo
  //TODO send the response of creation (failure or success)
  res.send(hash);

});

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
