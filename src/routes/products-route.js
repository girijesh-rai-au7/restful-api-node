const Product = require('../model/products-collection')
const express = require('express')
const router = express.Router()
//create product
router.post('/product',async(req,res)=>{
	try{
		const product= new Product(req.body);
		const createProduct = await product.save()
		res.send(createProduct)


	}catch(e){
		res.send(e)

	}
})
//get product
router.get('/product',async(req,res)=>{
	try{
		
		const getProduct = await Product.find()
		res.send(getProduct)


	}catch(e){
		res.send(e)

	}
})
//update product usig id
router.patch('/product/:id',async(req,res)=>{
	try{
		
	const updateProduct = await Product.findByIdAndUpdate(req.params.id,{$set:{mrp:req.body.mrp}});
		res.send(updateProduct)


	}catch(e){
		res.send(e)

	}
})
//delete product
router.delete('/product/:id',async(req,res)=>{
	try{
		
	const removeProduct = await Product.findByIdAndDelete(req.params.id);
		res.send(removeProduct)
	}catch(e){
		res.send(e)

	}
})



module.exports = router
