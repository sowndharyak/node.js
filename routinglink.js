var express = require('Express');
var app = express();

var things = require('./things.js');

app.use('/routing', things);

app.listen(3000);
