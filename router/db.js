var mongoose=require('mongoose');
class DataBase {
  constructor(uri) {
      this.uri = uri;
      this.db;
      return this;
  }
  mongoConnection () {
    var con;
    var cb = function(err){
      if(!err)
        console.log("Connection Opened");
      else
        console.log("Connection Opened Failed");
    };
    mongoose.connect(this.uri,cb);
    con = mongoose.connection;
  }
}
module.exports = DataBase;