const MongoClient = require('mongoose');
// console.log(MongoClient);
class DataBase {
  constructor(uri,db) {
      this.uri = uri;
      this.db = db;
      return this;
  }
  mongoConnection () {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.uri, (err, db) => {
        if (err){
          reject(err);
          console.log ('ERROR connecting to: ' + this.uri + '. ' + err);
        }
        this.db = db;
        resolve(this);
      })
    })
  }
}
module.exports = DataBase;