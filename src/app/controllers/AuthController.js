const User = require('../models/User');

class AuthController {

  async signUp (request, response) {

    console.log(User);

    return response.status(200).json({'message':'oi'});

    // const { email, password } = request.body;

    // const user = await User.findOne({ where: { email } });

    // if (!user) {
    //   return response.status(401).json({ message: 'User not found' });
    // }

    // if (!(await user.checkPassword(password))) {
    //   return response.status(401).json({ message: 'Incorrect password' });
    // }

    // return response.status(200).json({
    //   user,
    //   token: user.generateToken()
    // });
  }
}

module.exports = new AuthController();