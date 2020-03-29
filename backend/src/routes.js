// Importando o módulo express
const express = require('express');
const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const IncidentsController = require('./controllers/IncidentsController');

// Desacopla as rotas do express em um nova variável
const routes = express.Router();

// Criação de nova ONG
routes.post('/ongs', OngController.create);
// Listagem de ONGs
routes.get('/ongs', OngController.index);

//Listagem de Incidents da ONG logada
routes.get('/profile',ProfileController.index);

// Login
routes.post('/sessions', SessionController.create);

// Criação de novo Incident
routes.post('/incidents', IncidentsController.create);
// Listagem de Incidentss
routes.get('/incidents', IncidentsController.index);
// Deletando um Incident
routes.get('/incidents/:id', IncidentsController.delete);

// Exporta a variável routes desse arquivo para ser importada
//    pelo index.js
module.exports = routes;