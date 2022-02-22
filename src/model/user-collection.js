const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true

	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	bio:String,
	profilepic: String

	

})
const User = new mongoose.model('User', userSchema)
module.exports = User