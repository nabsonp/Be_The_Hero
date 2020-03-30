import axios from 'axios';

// Base URL é a base que se repete no começo de todas as rotas
// É o domínio
const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;