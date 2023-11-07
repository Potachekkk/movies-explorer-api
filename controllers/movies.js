const mongoose = require('mongoose');
const Movie = require('../models/movie');

const NotFound = require('../errors/notFound');
const NotOwner = require('../errors/notOwner');
const BadRequest = require('../errors/badRequest');

const { OK_STATUS, OK_CREATED_STATUS } = require('../config/config');

module.exports.getMovies = (_, res, next) => {
    Movie
      .find({})
      .then((movies) => res.status(OK_STATUS).send(movies))
      .catch(next);
  };

module.exports.createMovie = (req, res, next) => {
    const { country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId } = req.body;
    Movie
      .create({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId })
      .then((movie) => res.status(OK_CREATED_STATUS).send(movie))
      .catch((e) => {
        if (e instanceof mongoose.Error.ValidationError) {
          next(new BadRequest('Переданы некорректные данные при создании фильма'));
        } else {
          next(e);
        }
      });
};

module.exports.deleteMovie = (req, res, next) => {
    const { movieId } = req.params;
    const ownerId = req.user._id;
    Movied.findById(movieId)
      .orFail(() => {
        throw new NotFound('Фильм не найден');
      })
      .then((movie) => {
        if (!movie.owner.equals(ownerId)) {
          throw new NotOwner('Невозможно удалить чужой фильм');
        } else {
          return Movie.deleteOne(movie)
            .then(() => {
              res.status(OK_STATUS).send(movie);
            })
            .catch(next);
        }
      })
      .catch((e) => {
        if (e instanceof mongoose.Error.CastError) {
          next(new BadRequest('Переданы некорректные данные о фильме'));
        } else {
          next(e);
        }
      });
};