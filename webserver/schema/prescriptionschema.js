var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prescriptionSchema = new Schema({
	Medicine : String,
	Quantity : String,
	BuyingDate : String,
	PrescriptionImage : String,
	PharmacyNumber : String,
	PrescriptionNumber : String,
	userEmail : '',
	Repeat : String,

});

module.exports=mongoose.model('prescription',prescriptionSchema);
/*Quantity : Number,
	BuyingDate : Date,
	PrescriptionImage : String,
	PharmacyNumber : String,
	PrescriptionNumber : String*/
