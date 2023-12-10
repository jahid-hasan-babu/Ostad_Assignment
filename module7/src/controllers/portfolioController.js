exports.create = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is portfolioController create function"})
}

exports.read = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is portfolioController read function"})
}

exports.update = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is portfolioController update function"})
}

exports.delete = async (req,res) =>{
    res.status(200).json({status:"success", data:"This is portfolioController delete function"})
}