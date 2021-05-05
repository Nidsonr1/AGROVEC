const { Knex } = require("knex");

exports.up = function(Knex) {
  return Knex.schema.createTable('products', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('qtd').notNullable();
    table.string('value').notNullable();
    table.string('manufacturer').notNullable();
    table.boolean('available').notNullable();
    table.string('user_id').notNullable();
    
  //foreign key 
  table.foreign('user_id').references('id').inTable('user')

  });
};

exports.down = function(knex) {
  return Knex.schema.dropTable('products');
};