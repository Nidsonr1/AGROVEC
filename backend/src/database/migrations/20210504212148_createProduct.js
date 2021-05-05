const { Knex } = require("knex");

exports.up = function(Knex) {
  return Knex.schema.createTable('products', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('qtd').notNullable();
    table.string('value').notNullable();
  });
};

exports.down = function(knex) {
  return Knex.schema.dropTable('products');
};


//produto com id, nome (name), quantidade (qtd), valor (value)