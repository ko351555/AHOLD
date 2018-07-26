var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var User=require('../webserver/schema/loginschema.js');
var Signup=require('../webserver/schema/signupschema.js');
var prescription = require('../webserver/schema/prescriptionSchema');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');


app.use(session({ secret: 'keyboard cat',proxy: true,
   resave: true,
   saveUninitialized: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));



app.post('/login',function(req,res,next)
{    console.log("data")

  console.log(req.body.username);
  console.log(req.body.password);
  username = req.body.username,
  password = req.body.password
  Signup.findOne({username:username,password:password},function(err,data){
    if (err) {
      console.log(error);
    }
    console.log("Welcome "+data);

    res.send("Welcome "+data);

  });
  })


app.post('/signup',function(req,res,next)
{
      username=req.body.username,
      email=req.body.email,
      password=req.body.password,
      phoneno=req.body.phoneno

      var signup = new Signup();
      signup.username = username;
      signup.email = email;
      signup.password = password;
      signup.phoneno = phoneno;

console.log("inside signUp "+username+" "+password+" "+" "+phoneno+" "+email);
    signup.save(function(error,data)
  {
    if(error)
    {
      console.log(error);
      return res.status(500).send();
    }
    res.send("Welcome "+data);

     return res.status(200).send();
      })
})





app.post('/add',function(req,res){


	console.log(req.body)
var Pres = new prescription({
	Medicine : req.body.medicine,
	Quantity : req.body.Quantity,
	PrescriptionImage :req.body.image,
	PharmacyNumber : req.body.pharmacyNumber,
	PrescriptionNumber : req.body.prescriptionNumber,
  BuyingDate:req.body.BuyingDate,
  userEmail:req.body.userEmail
});

Pres.save(function(error,data) {
     console.log("Your bee has been saved!");
     res.send(data)
 if (error) {
    console.error(error);  }
 });
});


 app.post('/view',function(req, res){

   prescription.find({userEmail:req.body.userEmail},function(err,data){
     res.send(data)
     if(err){
        console.error(err)
     }
   });
 });
 app.delete('/delete',function(req, res){
console.log(req.body.prescriptionNumber)
   prescription.remove({PrescriptionNumber:req.body.prescriptionNumber},function(err,data){
     if(err)
       res.send({'success':'Not deleted'});
     else {
       res.send({'success':'deleted'});
       console
     }
   });
 });

app.post('/logout',function(req,res,next){
  req.session.destroy();
  res.send('destroyed');
})
// app.post('/signup',function(req,res,next){
//   req.session.destroy();
//   res.send('success');
// })
//
//
// app.get('/login',function(req,res,next){
//   res.send('failure login');
// });
// app.get('/success',function(req,res,next){
//   console.log('sajhcaksjch')
//
//   res.send('success login');
// });


//Mongoose
var db = 'mongodb://localhost/androidapp';
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected with mongo");
});








//Listening to port 8080
app.listen(3000, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }
    console.log("Server started at 3000");
});
