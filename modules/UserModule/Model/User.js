"use strict";
//var hash=require('../pass').hash;
//var mongoose=require('mongoose');
class User{
	constructor(MongoCon){
        this.MongoCon = MongoCon;
        this.Schema = MongoCon.Schema;
    }
	insert(req,MongoCon) {
        var userSchema= new this.Schema({
            userName: {type:String},
            password: {type:String},
            email: {type:String},
        });
        var userModel = MongoCon.model('tbl_user',userSchema);
        var alex = new userModel({userName:'Asif',password:"123456",email:"jrathod@officebrain.com"});
        alex.save(function(err,alex){
        if(err){
            console.log(err);
        }else{
            console.log("Document Save Done");
        }
        });
	}
}

module.exports = User;