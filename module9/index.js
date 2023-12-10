const app = require("./app");
const  mongoose  = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});


const port = process.env.PORT || 8080;




mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        console.log("DB Connected");
        app.listen(port, () =>{
            console.log(`Server is running at ${port}`)
        })
    })
    .catch((err)=> console.log(err))