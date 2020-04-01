// Importando o módulo express
const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const IncidentsController = require('./controllers/IncidentsController');

// Desacopla as rotas do express em um nova variável
const routes = express.Router();

// Criação de nova ONG
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(12).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);
// Listagem de ONGs
routes.get('/ongs', OngController.index);

//Listagem de Incidents da ONG logada
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),ProfileController.index);

// Login
routes.post('/sessions', SessionController.create);

// Criação de novo Incident
routes.post('/incidents', IncidentsController.create);
// Listagem de Incidentss
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentsController.index);
// Deletando um Incident
routes.get('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentsController.delete);

// Exporta a variável routes desse arquivo para ser importada
//    pelo index.js
module.exports = routes;