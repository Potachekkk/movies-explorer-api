const movieRouter = require('express').Router();
const { validateCreateMovie, validateId } = require('../middlewares/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', validateId, deleteMovie);

module.exports = { movieRouter };
