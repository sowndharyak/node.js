var express = require('express')
var app = express()
var root_item = require('./nodes.js')

   // app.use('/',root_item);

    var accOneN = new root_item({name:"sowndharya"})
    var accOneA = new root_item({Age:"20"})
    var accOneAd= new root_item({addr:"karur"})
    accOneN.save()
    accOneA.save()
    accOneAd.save()
    app.listen(8080)
    console.log('Server running at port 8080: http://127.0.0.1:8080');




        // router.get('/', function(req, res){
        //     res.send("hello dood ")
        // })

        // router.get('/aBout', function(req, res){
        //     res.send("hello dood ")
        // })
