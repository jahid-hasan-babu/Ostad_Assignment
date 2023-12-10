const express = require('express');
const app = new express()
const router = require("./src/routes/api")





const rateLimit = require('express-rate-limit');
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize');
const cors =require('cors');




app.use(cors())
app.use(helmet())
app.use(mongoSanitize())



app.use(express.json());
app.use(express.urlencoded({extended: false}));
const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)



app.use("/api/v1",router )





// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports = app
