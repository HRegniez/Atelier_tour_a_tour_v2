require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')
const agendaRoutes = require('./routes/agenda')

// Express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/agenda', agendaRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


