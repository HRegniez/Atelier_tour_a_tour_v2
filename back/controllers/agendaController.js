const Agenda = require('../models/agendaModel')

// GET agenda
const getAgenda = async (req, res) => {
    const agenda = await Agenda.find({}).sort({id: -1})

    res.status(200).json(agenda)
}

// PATCH agenda
const patchAgenda = async (req, res) => {
    const {id, adresse, dates, mapsLink} = req.body


    // Add doc to DB
    try {
        const agenda = await Agenda.create({id, adresse, dates, mapsLink})
        res.status(200).json(agenda)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAgenda,
    patchAgenda
}