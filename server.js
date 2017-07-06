var express = require("express");
var session = require('express-session');
var path = require('path');
var app = express();
var globalVars = {'app':app,'express':express,'path': path};
require('./router/main')(globalVars);
app.use(express.static(__dirname + '/modules/ThemeModule/Resources'));
var server = app.listen(8000,function(){
    console.log("We have started our server on port 8000");
});