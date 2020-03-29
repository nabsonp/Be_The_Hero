// Login cria sessão e Loggout deleta a sessão

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {

        const {id} = request.body;

        const ong = await connection('ongs')
            .where('id',id)
            .select('nome')
            .first();

        // Caso não haja uma ONG com esse id
        if (!ong) {
            // 400: Bad Request
            return response.status('400').json({error: 'No ONG found with this ID.'})
        }

        return response.json(ong);
    }
}