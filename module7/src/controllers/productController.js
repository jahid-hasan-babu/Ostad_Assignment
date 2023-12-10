exports.create = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is productController create function"})
}

exports.read = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is productController read function"})
}

exports.update = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is productController update function"})
}

exports.delete = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is productController delete function"})
}