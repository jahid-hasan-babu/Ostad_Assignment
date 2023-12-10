exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is post create function"})
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is post read function"})
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is post delete function"})
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is post update function"})
  };
