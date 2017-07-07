var express = require("express");
var session = require('express-session');
var path = require('path');
var app = express();
var mongoDbClient = require('./router/db'); 
var mongoDb = new mongoDbClient("mongodb://localhost/StackDemoConnection",'StackDemo');
var MongoCon= mongoDb.mongoConnection();
var globalVars = {'app':app,'express':express,'path': path,'mongoconn': MongoCon};
require('./router/main')(globalVars);
app.use(express.static(__dirname + '/modules/ThemeModule/Resources'));
var server = app.listen(8000,function(){
    console.log("We have started our server on port 8000");
});