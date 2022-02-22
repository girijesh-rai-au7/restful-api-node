const Business = require('../model/business-collection')
const express = require('express')
const router = express.Router()
//create data
router.post('/business',async(req,res)=>{
	try{
		const business = new Business(req.body)
		const createBusiness =  await business.save()
		res.send(createBusiness)

	}catch(e){
		res.send(e)
	}
})
//read data
router.get('/business',async(req,res)=>{
	try{
		
		const getBusiness =  await Business.find()
		res.send(getBusiness)

	}catch(e){
		res.send(e)
	}
})

module.exports = router