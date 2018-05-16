var express = require('express')
var path=require('path')
var app = express()

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'/form2.html'))

})
console.log("hai")
app.use(express.static(__dirname));
console.log(__dirname)
app.listen(3000)
