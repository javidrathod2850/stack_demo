module.exports = function(globalVars){
    var app = globalVars.app;
    var path = globalVars.path;
    var express = globalVars.express;
    var appDir = path.dirname(require.main.filename);
    // For Assets
    app.use(express.static(appDir + '/modules/UserModule/Resources'));
    app.set('view engine', 'ejs');
    
    app.get('/activity',function(req,res){
        init(app);
        res.render('activity.ejs', { title : 'Activity', route_name: 'activity' })
    });
    app.get('/register',function(req,res){
        init(app);
        res.render('register.ejs', {title: 'Register as a new user', route_name:'register'})
    });
    app.get('/questions',function(req,res){
        init(app);
        res.render('questions.ejs', {title: 'Questions', route_name:'questions'})
    });
    app.get('/unanswered',function(req,res){
       init(app);
        res.render('unanswered.ejs', {title: 'Unanswered', route_name:'unanswered'})
    });
    app.get('/users',function(req,res){
       init(app);
        res.render('users.ejs', {title: 'Users', route_name:'users'})
    });
    app.get('/ask',function(req,res){
        init(app);
        res.render('ask.ejs', {title: 'Ask a Question', route_name:'ask'})
    });
    app.get('/about',function(req,res){
        init(app);
        res.render('about.ejs', {title: 'About', route_name:'about'})
    });
}
function init(app){
    app.set('views',__dirname + '/../Views');
}