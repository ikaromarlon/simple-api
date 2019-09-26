const User = require('../models/User');

module.exports = {

  async signUp (req, res) {

    const { name, email, password, phones } = req.body;

    let user = await User.find({ email });

    if (user.length) return res.status(401).json({ message: 'Email already exists' });

    user = new User({
      name,
      email,
      password
    });

    if (phones) user.phones = phones;
    
    const token = await user.generateToken();

    await user.save((err, user) => {
      if (err) return res.status(501).json({'message': err.errmsg});
      
      return res.status(201).json({ user, token });
    });
  },

  async signIn (req, res) {
    const { email, password } = req.body;

    const users = await User.find({ email: email}).select(['+password','+token']);

    if (!users.length) return res.status(401).json({ message: 'Invalid credentials' });

    const user = users[0];

    if (!await user.checkPassword(password)) return res.status(401).json({ message: 'Invalid credentials' });

    const token = await user.generateToken();

    await user.save((err, user) => {
      if (err) return res.status(501).json({'message': err.errmsg});
      
      return res.status(200).json({ user, token });
    });
  }
  
}