const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Authetication token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_KEY);

    // eslint-disable-next-line require-atomic-updates
    req.userId = decoded.id;

    return next();

  } catch (error) {

    return res.status(401).json({ message: 'Authetication token invalid' });

  }
};