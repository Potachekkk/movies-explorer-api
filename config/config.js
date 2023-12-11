const { PORT = 3000 } = process.env;

const MONGO_URL_DEV = 'mongodb://127.0.0.1:27017/bitfilmsdb';

const OK_STATUS = 200;
const OK_CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;
const UNAUTHORIZED_STATUS = 401;
const NOT_OWNER_STATUS = 403;
const NOT_FOUND_STATUS = 404;
const CONFLICT_STATUS = 409;
const INTERNAL_SERVER_STATUS = 500;

const SALT_ROUND = 10;
const SECRET_KEY = 'some-secret-key';

const REG_URL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
const REG_ID = /^[0-9a-fA-F]{24}$/;
const REG_EMAIL = /.+@.+\..+/;

module.exports = {
  MONGO_URL_DEV,
  SECRET_KEY,
  PORT,
  OK_STATUS,
  OK_CREATED_STATUS,
  BAD_REQUEST_STATUS,
  UNAUTHORIZED_STATUS,
  NOT_OWNER_STATUS,
  NOT_FOUND_STATUS,
  CONFLICT_STATUS,
  INTERNAL_SERVER_STATUS,
  SALT_ROUND,
  REG_URL,
  REG_ID,
  REG_EMAIL,
};
