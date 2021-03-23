const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const mongodb_uri = 'mongodb+srv://seb-admin:devweb3@cluster0.y9dcx.mongodb.net/standoutDB';
const app = express();
const PORT = process.env.PORT || 8080;


//se connecter à la db via mongoose
mongoose.connect(mongodb_uri ,{useNewUrlParser: true,  useUnifiedTopology: true});

//Event verif
mongoose.connection.on("connected", () =>{
    console.log('Mongodb is connected');
});

//schema
const Schema = mongoose.Schema;
const clientsSchema = new Schema({
    nom: String,
    prenom: String,
    age: Number,
    sexe: String,
    mail: String,
    tel: String,
});

// Model (version compilée du schema) + je l'exporte vers app.components.ts
const Clients = mongoose.model('Clients', clientsSchema);

//(exemple) création d'une constante pour tests
const Data = {
    nom: 'Libotte',
    prenom: 'Saskia'
};

// créer une nouvelle instance du model qu'on va utiliser pour sauvegarder les données
const newClients = new Clients (Data);

newClients.save((error)=>{
    if (error){
        console.log('Il y a eu une erreur');
    } else {
        console.log('Les données ont été enregistrées');
    }
});

//HTTP request logger
app.use(morgan('tiny'));

//Routes
app.get('/api', (req, res) =>{
    
    Clients.find({})
        .then((data)=>{
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataerror);
        });

});

app.listen(PORT, console.log('Server is starting at 8080'));