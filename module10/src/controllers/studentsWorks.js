const WorksModel = require("../models/WorksModel")


exports.createWorks = async (req, res) =>{
    try {
        let reqBody = req.body;
        reqBody.email = req.headers['email']
        let result = await WorksModel.create(reqBody)
        res.status(201).json({status:"success",data:result})
    } catch (error) {
        res.status(200).json({status:"fail",error:"Task create fail"})
    }
    
}

exports.updateWorks = async (req,res) => {
    try{
        let id= req.params.id;
        let status= req.params.status;
        let Query={_id:id};
        let reqBody={status:status}

        let result= await WorksModel.updateOne(Query,reqBody)

        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}




exports.listWorksByStatus=async (req,res)=>{
    try {
        let status= req.params.status;
        let email=req.headers['email'];
        let result= await WorksModel.find({email:email,status:status});
        res.status(200).json({status:"success",data:result})
    }catch (error) {
        res.status(200).json({status:"fail",data:err.toString()})
    }
}



exports.WorksStatusCount=async (req,res)=>{
    try {
        let email=req.headers['email'];
        let result= await WorksModel.aggregate([
            {$match:{email:email}},
            {$group:{_id:"$status",sum:{$count:{}}}}
        ])
        res.status(200).json({status:"success",data:result})
    }
    catch (error) {
        res.status(200).json({status:"fail",data:error.toString()})
    }
}


exports.DeleteWorks = async (req, res) =>{
    try {
        let id= req.params.id;
        let result=await WorksModel.deleteOne({_id:id})
        res.status(200).json({status:"success",data:result})

    }catch (error) {
        res.status(200).json({status:"fail",data:err.toString()})
    }
}
