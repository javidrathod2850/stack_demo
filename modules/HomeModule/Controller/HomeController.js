module.exports = function(globalVars){
    var app = globalVars.app;
    var path = globalVars.path;
    var express = globalVars.express;
    
    var appDir = path.dirname(require.main.filename);
    app.set('views',__dirname + '/../Views');
    // For Assets
    app.use(express.static(appDir + '/modules/HomeModule/Resources'));
    app.set('view engine', 'ejs');
    app.get('/',function(req,res){
        res.render('index.ejs')
    });
}