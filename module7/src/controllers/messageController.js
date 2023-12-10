exports.create = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is messageController create function"})
}

exports.read = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is messageController read function"})
}

exports.update = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is messageController update function"})
}

exports.delete = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is messageController delete function"})
}