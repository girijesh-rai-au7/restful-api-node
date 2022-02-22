const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	mrp:{
		type:Number,
		required:true
	},
	description:String,
	image:{
		type:String,
		required:true
	}

})
const Product = new mongoose.model('Product',productSchema)
module.exports = Product