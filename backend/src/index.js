// Importando o módulo express
const express = require('express');

// Importa o arquivo (por isso o ./) routes exportado pelo routes.js
const routes = require('./routes');

// Instanciando a aplicação
const app = express();

// Especifica que o corpo das mensagens HTTP são JSONs
app.use(express.json())

// Especifica que a aplicação utilize as rotas na var. routes
app.use(routes);

// A aplicação vai ouvir a porta 3333
app.listen(3333);