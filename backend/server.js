'use strict';


var express 	= require('express')
var app 		= express()
var bodyParser  = require("body-parser");
var config  	= require("./config/server_config.js");
var path		= require('path');


app.use(bodyParser.json({limit:1024*1024*40, type:'application/json'}));
app.use(bodyParser.urlencoded({ extended:true,limit:1024*1024*40, type:'application/x-www-form-urlencoding' }));
app.use(require('./config/routes'));


app.use(function(req, res, next){
	next();
})



app.listen(config.port, function () {
  console.log('Example app listening on port !' + config.port);
})



app.get('/', function (req, res) {
	console.log('here');
	res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'ateknea' ));
});



module.exports = app;