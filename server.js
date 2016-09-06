var express= require('express');
var app= express();

var port= process.env.PORT ||t 3000;
var ip= "127.0.0.1";

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/src/styles'));

app.listen(port, function(){console.log('listening on port: ', port)});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});