const mongoose = require('mongoose');
const businessSchema = new mongoose.Schema({
	name:String,
	email:{
		type:String,
		required:true,
		unique:true
	},
	registrationNo:{
		type:Number,
		required:true


	}


})
const Business = new mongoose.model('Business',businessSchema)
module.exports = Business