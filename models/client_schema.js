const mongoose = require('mongoose')

const clientsSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sexe: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('client', clientsSchema)