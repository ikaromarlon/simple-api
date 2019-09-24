const User = require('../models/User');

class UsersController {

  async create (request, response) {

    const user = await User.create({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    });

    return response.status(200).json({ user });
  }

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