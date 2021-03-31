const express = require('express')
const router = express.Router()
const clients = require('../models/client_schema')


//GET TOUS les clients
router.get('/', async (req, res) => {
    try {
        const client = await clients.find()
        res.json(client)
    }
    catch (error) {
        req.statusCode(500).json({ message: err.message })
    }
})


//GET UN client
router.get('/:id', getClient, (req, res) => {
    res.send(res.client)
})


//POST UN client
router.post('/add', async (req, res) => {
    const client = new clients({
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        sexe: req.body.sexe,
        mail: req.body.mail
    })
    try {
        const newclient = client.save()
        res.status(201).json(newclient)
        console.log("correctly added")
    }
    catch (error){
        res.status(400).json({ message: err.message })
    }
    
})


//PATCH un client (patch au lieu de put pour modifier que ce que l'on veut modifier et pas tout remodifier)
router.patch('/:id', getClient, async (req, res) => {
    if (req.body.nom != null) {
        res.client.nom = req.body.nom
    }
    if (req.body.prenom != null) {
        res.client.prenom = req.body.prenom
    }
    try {
        const updateClient = await res.client.save()
        res.json(updateClient)
    }
    catch (error) {
        res.status(400).json({ message: err.message })
    }
})


//DELETE un client
router.delete('/:id', getClient,(req, res) => {
    try {
        res.client.remove()
        res.json({ message: 'Deleted client' })
    }
    catch (error){
            res.status(500).json({ message: err.message })
    }
})


// Fonction qui permet d'aller chercher l'ID en paramètre et le mettre dans une "response"
async function getClient(req, res, next) {
    let client
    try {
        client = await clients.findById(req.params.id)
        if (client == null){
            return res.status(404).json({ message: 'Cannot find client with this id'})
        }
    }
    catch (error) {
        return res.status(500).json({ message: err.message })
    }
    res.client = client
    next()
}


module.exports = router