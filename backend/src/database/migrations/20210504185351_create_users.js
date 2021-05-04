const { Knex } = require("knex");

exports.up = function(Knex) {
  return Knex.schema.createTable('users', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  });
};

exports.down = function(knex) {
  return Knex.schema.dropTable('users');
};
