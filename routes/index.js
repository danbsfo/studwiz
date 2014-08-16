var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Studwiz' });
});

MongoClient.connect("mongodb://localhost:27017/studwiz", function(err, db) {
  if(!err)
    console.log("connected");
  else
    console.log("problem connecting");
})

module.exports = router;
