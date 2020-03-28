const knex = require('knex');
const configuration = require('../../knexfile.js');

// Abre a conexão do ambiente de dev
const connection = knex(configuration.development);

// Exporta a conexão com o banco
module.exports = connection;