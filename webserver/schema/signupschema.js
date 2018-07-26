var mongoose=require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var Schema=mongoose.Schema;
var signupschema=new Schema({
  username : String,
  email : String,
  password: String,
phoneno:String

});
signupschema.statics.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
signupschema.statics.generateHashEmail = function(email) {
    return bcrypt.hashSync(email, bcrypt.genSaltSync(8), null);
};
module.exports=mongoose.model('signup',signupschema);
