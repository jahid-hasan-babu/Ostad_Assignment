exports.create = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is commentController create function"})
}

exports.read = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is commentController read function"})
}

exports.update = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is commentController update function"})
}

exports.delete = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is commentController delete function"})
}