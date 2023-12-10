const mongoose = require('mongoose')


const StudentsSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            unique:true,
            required:true
        },
        firstName:{type:String},
        lastName:{type:String},
        mobile:{type:String},
        password:{type:String},
        address:{type:String},
        roll:{type:String},
        class:{type:String},

    },{timestamps: true, versionKey:false}
);


const StudentsModel = mongoose.model('students',StudentsSchema)
module.exports = StudentsModel