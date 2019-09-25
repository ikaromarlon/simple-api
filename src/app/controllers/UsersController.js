const User = require('../models/User');

class UsersController {

  async all (request, response) {

    const users = await User.findAll();

    return response.status(200).json({ users });
  }

  async find (request, response) {

    const user = await User.findOne({ where: {id: request.params.id } });

    return response.status(200).json({ user });
  }
}

module.exports = new UsersController();