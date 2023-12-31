require('dotenv').config()
const jwt = require("jsonwebtoken")


module.exports=(req,res,next) =>{
    let Token = req.headers['token'];
    jwt.verify(Token,process.env.SERECTKEY,function (err,decoded) {
        if(err){
            console.log(Token);
            res.status(401).json({status:"unauthorized"})
        }else{
            let email = decoded['data']
            req.headers.email = email
            next()
        }
    })
}


