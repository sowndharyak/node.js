var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('SREC');
});


router.post('/', function (req, res) {
  res.send('hai');
})

module.exports = router;
