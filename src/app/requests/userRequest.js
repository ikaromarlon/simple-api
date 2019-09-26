const uuidValidate = require('uuid-validate');

module.exports = {

  getFind (req, res, next) {

    const { id } = req.params;
    const errors = [];

    if (!uuidValidate(id)) errors.push(`Parameter 'id' is not a valid UUID`);

    if (errors.length) return res.status(400).json({ errors });

    next()
  }
  
};
