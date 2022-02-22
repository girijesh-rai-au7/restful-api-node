const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/studentDB',{useNewUrlParser:true},
()=>{console.log("connected to database")})
