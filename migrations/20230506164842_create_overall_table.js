/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('overall', function(table) {
    table.increments();
    table.string('email');
    table.string('name');
    table.string('about');
    table.string('phoneNumber');
    table.string('address');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('overall');
};
