var express = require('express');
var router = express.Router();
var MongoClient = require ('mongodb');

router.get('/', function(req, res, next) {
  res.render('update');
});

module.exports = router;
