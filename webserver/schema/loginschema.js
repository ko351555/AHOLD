var mongoose=require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var Schema=mongoose.Schema;
var loginSchema=new Schema({
  username : String,
  password: String
});



module.exports=mongoose.model('logindetails',loginSchema);
