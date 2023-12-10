const express = require('express');
const app = new express()


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressSanitizer = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const validator = require('validator');
const router = require('./src/Routes/api');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressSanitizer());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use(limiter);


app.use("/api/v1", router)


app.use('*',(req,res)=> {
    res.status(404).json({status:"error",data:"Not Found"})
})

module.exports = app