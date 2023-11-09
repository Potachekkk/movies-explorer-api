const mongoose = require('mongoose');
const { REG_URL } = require('../config/config');

const { ObjectId } = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema(
    {
        country: {
            type: String,
            required: [true, 'Поле "country" должно быть заполнено'],
        },
        director: {
            type: String,
            required: [true, 'Поле "director" должно быть заполнено'],
        },
        duration: {
            type: Number,
            required: [true, 'Поле "duration" должно быть заполнено'],
        },
        year: {
            type: String,
            required: [true, 'Поле "year" должно быть заполнено'],
        },
        description: {
            type: String,
            required: [true, 'Поле "description" должно быть заполнено'],
        },
        image: {
            type: String,
            required: [true, 'Поле "image" должно быть заполнено'],
            default: REG_URL
        },
        trailerLink: {
            type: String,
            required: [true, 'Поле "trailerLink" должно быть заполнено'],
            default: REG_URL
        },
        thumbnail: {
            type: String,
            required: [true, 'Поле "thumbnail" должно быть заполнено'],
            default: REG_URL
        },
        owner: {
            type: ObjectId,
            required: [true, 'Поле "owner" должно быть заполнено'],
        },
        movieId: {
            type: Number,
            required: [true, 'Поле "movieId" должно быть заполнено'],
        },
        nameRU: {
            type: String,
            required: [true, 'Поле "nameRU" должно быть заполнено'],
        },
        nameEN: {
            type: String,
            required: [true, 'Поле "nameEN" должно быть заполнено'],
        },
    }
)

module.exports = mongoose.model('movie', movieSchema);