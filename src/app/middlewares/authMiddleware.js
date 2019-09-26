const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const [, token] = authHeader.split(' ');

  try {
    await promisify(jwt.verify)(token, 'gJ6JlxgWKj21swOsv7vm5Q');

    return next();

  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};