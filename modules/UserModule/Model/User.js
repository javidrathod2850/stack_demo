"use strict";

class User{
	constructor(MongoCon){
        this.MongoCon = MongoCon;
        this.Schema = MongoCon.Schema;
    }
	insert(formData,response,MongoCon) {
        var userSchema= new this.Schema({
            userName: {type:String},
            password: {type:String},
            email: {type:String},
        });
        if (MongoCon.models && MongoCon.models.tbl_user){
            var userModel = MongoCon.models.tbl_user
        }else{
            var userModel = MongoCon.model('tbl_user',userSchema);
        }        
        var userData = new userModel({userName:formData.username,password:formData.password,email:formData.email});
        userData.save(function(err,userData){
            if(err){
                console.log(err);
            }else{
                response.redirect('/');
            }
        });
	}
}
module.exports = User;