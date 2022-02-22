const express = require('express')
const mongoose = require('mongoose')
require('./db/conn');
const app = express()
app.use(express.urlencoded({extended:false}))

const PORT = process.env.PORT || 3000;



app.use(express.json())
const studentRoute = require('./routes/student-routes');
app.use(studentRoute);
const userRoute = require('./routes/user-route')
app.use(userRoute)
const productRoute = require('./routes/products-route');
app.use(productRoute)
const businessRoute = require('./routes/business-route');
app.use(businessRoute)

app.listen(PORT,()=>{
	console.log("server is running at port")
})