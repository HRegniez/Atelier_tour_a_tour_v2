const mongoose = require('mongoose')

const Schema = mongoose.Schema

const agendaSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    dates: {
        type: String,
        required: true
    },
    mapsLink: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Agenda', agendaSchema)