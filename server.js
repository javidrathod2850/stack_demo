var express = require("express");
var session = require('express-session');
var app        =    express();
require('./router/main')(app);
//app.set('views',__dirname + '/views');
//app.set('view engine', 'ejs');
//app.use(express.static('views'))


var server     =    app.listen(8000,function(){
    console.log("We have started our server on port 8000");
})