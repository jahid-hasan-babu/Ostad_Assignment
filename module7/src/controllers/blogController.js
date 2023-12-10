exports.create = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is blogController create function"})
}

exports.read = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is blogController read function"})
}

exports.update = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is blogController update function"})
}

exports.delete = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is blogController delete function"})
}


