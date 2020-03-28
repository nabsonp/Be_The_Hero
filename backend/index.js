// Importando o módulo express
const express = require('express');

// Instanciando a aplicação
const app = express();

// Cria uma função para ser chamada na rota raiz
// Sempre recebe a rota e a função a ser executada, que recebe dois parâmetros
app.get('/', (request,response) => {
    // send: envia um texto como resposta para a porta
    // return response.send("Hello Word");

    // json envia uma resposta em JSON, que é o padrão
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Nabson Paiva"
    })
});

// A aplicação vai ouvir a porta 3333
app.listen(3333);