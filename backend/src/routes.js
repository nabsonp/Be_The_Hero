// Importando o módulo express
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');

// Desacopla as rotas do express em um nova variável
const routes = express.Router();

// Criação de nova ONG
routes.post('/ongs', OngController.create);

// Listagem de ONGs
routes.get('/ongs', OngController.index);

// Criação de novo Incident
routes.post('/incidents', IncidentsController.create);

// Listagem de Incidentss
routes.get('/incidents', IncidentsController.index);

// Exporta a variável routes desse arquivo para ser importada
//    pelo index.js
module.exports = routes;