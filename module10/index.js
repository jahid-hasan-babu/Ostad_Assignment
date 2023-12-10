const app = require("./app")
const  mongoose  = require("mongoose")
require('dotenv').config()
const port = process.env.PORT || 4000
const url = process.env.MONGODB_URL

mongoose
    .connect(url)
    .then(()=>{
        console.log("DB Connected");
        app.listen(port, () =>{
            console.log(`Server is running at ${port}`)
        })
    })
    .catch((err)=> console.log(err))

