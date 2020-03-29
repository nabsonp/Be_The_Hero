const connection = require('../database/connection');

module.exports = {
    async delete (request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();

        // Verifica se a ONG que tá querendo eliminar é a dona
        if (ong_id != incident.ong_id) {
            // Vai retornar o código 401: Unauthorized com uma msg JSON
            return response.status(401).json({ error: 'Operation not permited.'});
        }

        await connection('incidents').where('id',id).delete();
        
        // Cód. 204: No Content - resposta de sucesso sem corpo
        return response.status(204).send();
    },

    async index (request, response) {
        const {page = 1} = request.query;

        // Retorna o número de registros na tabela
        const [count] = await connection('incidents').count();

        // Busca com paginação
        const incidents = await connection('incidents')
            .limit(5)
            .offset((page-1)*5)
            .select('*');
    
        // Coloca o número de registros no Header, onde é mais comum estar
        // Podia ser também 'X-Total-Pages'
        response.header('X-Total-Count', count['count(*)'])
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