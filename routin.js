var express = require('express');
var router = express.Router();
var db=require('./nodes.js');
router.get('/', function (req, res) {
  res.send('SREC');
});
router.get('/accolists',function(req,res){
db.find({},function(err,data){
  res.json({data});
});
});

module.exports = router;
