var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('presentation', {title: 'présentation', h1: 'Le labyrinthe : Remède mortel', hrefune: 'contact', pageune: 'contact'});
});

module.exports = router;
