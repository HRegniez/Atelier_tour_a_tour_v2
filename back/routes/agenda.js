const express = require('express')

const router = express.Router()

// GET agenda
router.get('/', (req, res) => {
    res.json({mgg: 'get agenda'})
})

// UPDATE agenda
router.patch('/', (req, res) => {
    res.json({msg: 'patch agenda'})
})

module.exports = router