const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {

        const { nome, email, whatsapp, city, uf} = request.body;

        // Gerando 4 bytes de caracteres hexadecimais
        const id = crypto.randomBytes(4).toString('HEX');

        // O node vai esperar esse código rodar para poder continuar
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            city,
            uf
        })

        // json envia uma resposta em JSON, que é o padrão
        return response.json({ id });
    }
}