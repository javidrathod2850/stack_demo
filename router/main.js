module.exports = function(globalVars){
    //require('../modules/HomeModule/Controller/HomeController')(globalVars);
    var app = globalVars.app;
    app.get('/activity',function(req,res){
        require(__dirname + '/../modules/UserModule/Controller/UserController')(globalVars);
        res.render('activity.ejs', { title : 'Activity', route_name: 'activity' })
    });
    app.get('/register',function(req,res){
        require(__dirname + '/../modules/UserModule/Controller/UserController')(globalVars);
        res.render('register.ejs', {title: 'Register as a new user', route_name:'register'})
    });
    app.get('/questions',function(req,res){
        require(__dirname + '/../modules/UserModule/Controller/UserController')(globalVars); 
        res.render('questions.ejs', {title: 'Questions', route_name:'questions'})
    });
    app.get('/unanswered',function(req,res){
        require(__dirname + '/../modules/UserModule/Controller/UserController')(globalVars); 
        res.render('unanswered.ejs', {title: 'Unanswered', route_name:'unanswered'})
    });
    app.get('/users',function(req,res){
        require(__dirname + '/../modules/UserModule/Controller/UserController')(globalVars); 
        res.render('users.ejs', {title: 'Users', route_name:'users'})
    });
    app.get('/ask',function(req,res){
        require(__dirname + '/../modules/UserModule/Controller/UserController')(globalVars); 
        res.render('ask.ejs', {title: 'Ask a Question', route_name:'ask'})
    });
    app.get('/about',function(req,res){
        require(__dirname + '/../modules/UserModule/Controller/UserController')(globalVars); 
        res.render('about.ejs', {title: 'About', route_name:'about'})
    });
    app.get('/',function(req,res){
        require(__dirname + '/../modules/HomeModule/Controller/HomeController')(globalVars); 
        res.render('index.ejs', {title: 'Home', route_name:'home'})
    });
}
