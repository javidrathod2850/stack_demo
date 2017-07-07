module.exports = function(globalVars){
    require('../modules/UserModule/Controller/UserController')(globalVars);
    require('../modules/HomeModule/Controller/HomeController')(globalVars);
}
