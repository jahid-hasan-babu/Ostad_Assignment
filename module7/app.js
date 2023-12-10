const express = require("express");
const app = new express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const validator = require('validator');
const router = require('./src/routes/api');



// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use(limiter);

//we use validator for email check purpose 
//validator.isEmail('foo@bar.com'); //=> true

app.use('/api/v1',router);


//undefine route
app.use('*',(req,res)=> {
    res.status(404).json({status:"error",data:"Not Found"})
})

module.exports = app