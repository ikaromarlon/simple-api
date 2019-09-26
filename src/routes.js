const routes = require('express').Router();
const authMiddleware = require('./app/middlewares/authMiddleware');
const authRequest = require('./app/requests/authRequest');
const authController = require('./app/controllers/authController');
const userRequest = require('./app/requests/userRequest');
const usersController = require('./app/controllers/usersController');

routes.get('/', (req, res) => res.status(200).json({ message: 'Server running!!!!' }));

routes.post('/sign-up', [ authRequest.postSignUp, authController.signUp ]);
routes.post('/sign-in', [ authRequest.postSignIn, authController.signIn ]);

routes.use(authMiddleware);

routes.get('/users/', usersController.all);
routes.get('/users/:id', [ userRequest.getFind, usersController.find ]);

module.exports = routes;