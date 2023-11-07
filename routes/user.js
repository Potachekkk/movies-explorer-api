const userRouter = require('express').Router();

const {
    updateUserInfo,
    currentUser,
  } = require('../controllers/users');

userRouter.get('/me', currentUser);
userRouter.patch('/me', updateUserInfo);

module.exports = { userRouter };