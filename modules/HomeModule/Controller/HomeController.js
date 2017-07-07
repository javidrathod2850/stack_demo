module.exports = function(globalVars){
    var app = globalVars.app;
    var path = globalVars.path;
    var express = globalVars.express;
    var appDir = path.dirname(require.main.filename);
    // For Assets
    app.use(express.static(appDir + '/modules/HomeModule/Resources'));
    app.set('view engine', 'ejs');
     app.get('/',function(req,res){
        init(app);
        res.render('index.ejs', {title: 'Home', route_name:'home'})
    });
}
function init(app){
    app.set('views',__dirname + '/../Views');
}