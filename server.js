var express = require("express");
var session = require('express-session');
var bodyParser =  require("body-parser");
var mongoose=require('mongoose');
var path = require('path');
var app = express();
var mongoDbClient = require('./router/db');
var mongoDb = new mongoDbClient("mongodb://localhost:27017/StackDemo");
var MongoCon= mongoDb.mongoConnection();
app.use(bodyParser.urlencoded({ extended: false }));

var globalVars = {'app':app,'express':express,'path': path,'mongoconn': mongoose,'bodyparser': bodyParser};
require('./router/main')(globalVars);
app.use(express.static(__dirname + '/modules/ThemeModule/Resources'));
var server = app.listen(8200,function(){
    console.log("We have started our server on port 8000");
});