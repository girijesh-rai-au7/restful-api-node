const User = require('../model/user-collection')
const express = require('express')
const router = express.Router()
router.post('/user', async(req,res)=>{
	try{
		const user = new User(req.body)
		const usercreatedData = await user.save()
		res.send(usercreatedData)

	}
	catch(e){
		res.send(e)

	}
})
router.get('/user',async(req,res)=>{
	try{
		const getUserData = await User.find()
		res.send(getUserData)

	}catch(e){
		res.send(e)

	}

})

module.exports = router
