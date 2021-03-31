require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


// Connection à la base de donnée (utilisation de dotenv pour l'url)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const clientsRouter = require('./routes/clients')
app.use('/clients', clientsRouter)

app.listen(4200, () => console.log ('Server Started'))