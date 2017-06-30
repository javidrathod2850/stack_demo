module.exports = function(app){
    console.log(__dirname + '../Views')
    app.set('views',__dirname + '/../Views');
    app.set('view engine', 'ejs');
    app.get('/',function(req,res){
        res.render('index.ejs')
    });
}