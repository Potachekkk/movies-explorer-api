require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('./middlewares/cors');
const { handleError } = require('./middlewares/error-handling');
const { routes } = require('./routes');
const { PORT, MONGO_URL_DEV } = require('./config/config');

const { NODE_ENV, MONGO_URL } = process.env;

const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/rateLimiter');

const app = express();

app.use(cors);

app.use(express.json());

app.use(helmet());

mongoose.connect(NODE_ENV === 'production' ? MONGO_URL : MONGO_URL_DEV);

app.use(requestLogger);

app.use(limiter);

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use(handleError);

app.listen(PORT);
