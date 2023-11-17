const { celebrate, Joi } = require('celebrate');
const {
  REG_URL,
  REG_ID,
  REG_EMAIL,
  REG_PASSWORD,
} = require('../config/config');

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(REG_PASSWORD),
  }),
});

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(REG_PASSWORD),
  }),
});

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().pattern(REG_EMAIL),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(REG_URL),
    trailerLink: Joi.string().required().pattern(REG_URL),
    thumbnail: Joi.string().required().pattern(REG_URL),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().regex(REG_ID),
  }),
});

module.exports = {
  validateLogin,
  validateCreateUser,
  validateUpdateUser,
  validateCreateMovie,
  validateId,
};
