const userRouter = require('express').Router();
const { validateUpdateUser } = require('../middlewares/validation');

const {
  updateUserInfo,
  currentUser,
} = require('../controllers/users');

userRouter.get('/me', currentUser);
userRouter.patch('/me', validateUpdateUser, updateUserInfo);

module.exports = { userRouter };
