const express = require('express');
const { userRouter } = require('./user');
const { movieRouter } = require('./movie');
const { auth } = require('../middlewares/auth');
const NotFound = require('../errors/notFound');
const { createUser, login } = require('../controllers/users');

const routes = express.Router();

routes.all('*', express.json());

routes.post('/signin', login);
routes.post('/signup', createUser);

routes.use('/users', auth, userRouter);
routes.use('/movies', auth, movieRouter);

routes.all('*', auth, (req, res, next) => {
  next(new NotFound('Такой страницы не существует'));
});

module.exports = { routes };