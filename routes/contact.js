var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

router.get('/', function(req, res, next) {
  res.render('contact');
  });
MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  if (err) throw err
  router.post('/send', function(req, res, next) {
    var data ={
      "title": req.body.title,
      "author": req.body.author,
      "price": req.body.price,
    }
    db.collection('books').insertOne(data)
    res.redirect('/home');
  });
  router.post('/delete', function(req, res, next){
    console.log(req.body);
    db.collection('books').deleteOne({"_id": ObjectId(req.body.book)});
    res.redirect('/home');
  });
  router.post('/update', function(req, res, next){
    console.log(req.body);
    db.collection('books').updateOne({"_id": ObjectId(req.body.book)});
    res.redirect('/update');
  });
})
module.exports = router;
