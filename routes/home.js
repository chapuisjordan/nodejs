var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  if (err) throw err
  router.get('/', function(req, res, next) {
    db.collection('books').find({}).toArray(function(err,docs){
      console.log(docs);
      res.render('home', {title: "Librairie", books: docs});
    })
  });


})

module.exports = router;
