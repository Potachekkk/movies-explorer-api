const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: [true, 'Поле "email" должно быть заполнено'],
        unique: true,
        validate: {
          validator: (v) => validator.isEmail(v),
          message: 'Некорректный Email',
        },
      },
      password: {
        type: String,
        required: [true, 'Поле "password" должно быть заполнено'],
        select: false,
      },
      name: {
        type: String,
        default: 'Влад',
        minlength: [2, 'Имя не может быть короче 2 символов'],
        maxlength: [30, 'Имя не может быть длиннее 30 символов'],
      },
    })

    module.exports = mongoose.model('user', userSchema);