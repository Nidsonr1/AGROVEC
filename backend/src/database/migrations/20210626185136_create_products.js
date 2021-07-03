
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    // table.integer('barcode').notNullable();
    table.float('weight').notNullable();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.float('price').notNullable();

    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
