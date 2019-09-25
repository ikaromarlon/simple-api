const User = require('../models/User');

class AuthController {

  async signUp (req, res) {

    let user = await User.find({ email: req.body.email});

    if (user.length) return res.status(401).json({ message: 'Email already exists' });

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      status: 1,
    });
    
    user.generateToken();

    await user.save((err, user) => {
      if (err) return res.status(501).json({'message': err.errmsg});
      
      return res.status(201).json({user});
    });

    // const { email, password } = req.body;

    // const user = await User.findOne({ where: { email } });

    // if (!user) {
    //   return res.status().json({ message: 'User not found' });
    // }

    // if (!(await user.checkPassword(password))) {
    //   return res.status(401).json({ message: 'Incorrect password' });
    // }

    // return res.status(200).json({
    //   user,
    //   token: user.generateToken()
    // });
  }

  async signIn (req, res) {

    let user = await User.find({ email: req.body.email});

    if (user.length) return res.status(401).json({ message: 'Email already exists' });

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      status: 1,
    });
    
    user.generateToken();

    await user.save((err, user) => {
      if (err) return res.status(501).json({'message': err.errmsg});
      
      return res.status(201).json({user});
    });

    // const { email, password } = req.body;

    // const user = await User.findOne({ where: { email } });

    // if (!user) {
    //   return res.status().json({ message: 'User not found' });
    // }

    // if (!(await user.checkPassword(password))) {
    //   return res.status(401).json({ message: 'Incorrect password' });
    // }

    // return res.status(200).json({
    //   user,
    //   token: user.generateToken()
    // });
  }
}

module.exports = new AuthController();