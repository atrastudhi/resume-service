/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('education', function(table) {
    table.increments();
    table.string('name');
    table.string('major');
    table.string('status');
    table.date('startDate');
    table.date('endDate');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('education');
};
