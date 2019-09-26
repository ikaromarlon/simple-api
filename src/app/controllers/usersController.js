const User = require('../models/User');

module.exports = {

  async all (req, res) {

    let users = await User.find();
    
    return res.status(200).json(users);
  },

  async find (req, res) {
    
    const { id } = req.params;

    let user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(200).json({}); 
    }
    
    return res.status(200).json(user);
  }

}