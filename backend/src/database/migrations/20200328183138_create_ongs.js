// método responsável pela criação da tabela
exports.up = function(knex) {
    // cria a tabela ongs
  return knex.schema.createTable('ongs', function (table) {
      // define id como uma coluna do tipo string sendo a primary key
      table.string('id').primary();
      // define o nome como uma string not null
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      // o segundo parâmetro é o tamanho máximo do campo
      table.string('uf',2).notNullable();
  });
};

// utilizado para deletar tabelas
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
