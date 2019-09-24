const routes = require('express').Router();
const authMiddleware = require('./app/middlewares/auth');
const AuthController = require('./app/controllers/AuthController');
const UsersController = require('./app/controllers/UsersController');

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Funfante!!!!' });
});

routes.get('/signup', AuthController.signUp);
// routes.post('/signin', AuthController.signIn);

// routes.use(authMiddleware);

// routes.get('/users/:id', UsersController.find);

module.exports = routes;