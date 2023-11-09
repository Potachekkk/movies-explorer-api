const { celebrate, Joi } = require('celebrate');
const { REG_URL, REG_ID } = require('../config/config');

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(REG_URL),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required().regex(REG_URL),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().regex(REG_ID),
  }),
});

module.exports = {
  validateLogin,
  validateCreateUser,
  validateUpdateUser,
  validateCreateMovie,
  validateId,
};
