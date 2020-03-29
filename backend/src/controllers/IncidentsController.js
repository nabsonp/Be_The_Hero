const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const incidents = await connection('incidents').select('*');
    
        return response.json(incidents);
    },

    async create(request, response) {

        const {title, description, value} = request.body;
        
        // Quem está cadastrando o caso é a ONG logada, então
        //   seu id é acessado pelo campo Authorization do 
        //   header da mensagem, preenchido no login.
        const ong_id = request.headers.authorization;

        // O resultado de uma só inserção é um array com um id
        const [id] = await connection('incidents').insert({
            description,
            ong_id,
            title,
            value
        })

        return response.json({ id } );
    }
}