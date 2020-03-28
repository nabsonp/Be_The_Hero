// Importando o módulo express
const express = require('express');

// Desacopla as rotas do express em um nova variável
const routes = express.Router();

// Cria uma função para ser chamada na rota raiz
// Sempre recebe a rota e a função a ser executada, que recebe dois parâmetros
routes.get('/users/:id', (request,response) => {

    // Acessando os Query Params
    const queries = request.query;
    console.log("Queries:",queries);

    // Acessando os Route Params
    // A rota deve especificat o parâmetro: '/users/:id'
    const route = request.params;
    console.log("Params: ",route);

    // send: envia um texto como resposta para a porta
    // return response.send("Hello Word");

    // json envia uma resposta em JSON, que é o padrão
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Nabson Paiva"
    })
});

app.post('/users', (request,response) => {

    // Acessando o Request Body
    const body = request.body;
    console.log("Body:",body);

    // json envia uma resposta em JSON, que é o padrão
    return response.json(body)
});

// Exporta a variável routes desse arquivo para ser importada
//    pelo index.js
module.exports = routes;