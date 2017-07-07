"use strict";

class User{
	constructor(MongoCon){
        this.MongoCon = MongoCon;
        this.Schema = MongoCon.Schema;
        
    }
    connection(callback){
         if (this.MongoCon.models && this.MongoCon.models.tbl_user){
            var userModel = this.MongoCon.models.tbl_user
        }else{
            var userSchema= new this.Schema({
                userName: {type:String},
                password: {type:String},
                email: {type:String},
            });
        }
        callback(this.MongoCon.model('tbl_user',userSchema));
    }
	insert(formData,response,MongoCon) {
        this.connection(function(userModel){
        var userData = new userModel({userName:formData.username,password:formData.password,email:formData.email});
        userData.save(function(err,userData){
            if(err){
                console.log(err);
            }else{
                response.redirect('/');
            }
        });
        })
       
	}
    checklogin(formData,response,MongoCon) {
        this.connection(function(userModel){
        userModel.findOne({$or:[{"userName":formData.email},{"email": formData.email}]},function(err,data){
			if(err){
				throw err;
			}else{
                if(data.password==formData.password){ 

                }else{

                }
            }
        }
        )}
    )};
}
module.exports = User;