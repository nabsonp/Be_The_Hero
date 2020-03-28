
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        // chave primária autoincrement
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.float('value').notNullable();
        table.string('ong_id').notNullable();

        //definindo ong_id como uma chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
