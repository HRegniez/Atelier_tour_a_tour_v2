const express = require('express')
const {
    getAgenda,
    patchAgenda
} = require("../controllers/agendaController")

const router = express.Router()

// GET agenda
router.get('/', getAgenda)

// UPDATE agenda
router.post('/', patchAgenda)

module.exports = router