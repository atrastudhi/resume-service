/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project').del();
  await knex('project').insert({
    name: 'Djoernal',
    position: 'Backend Developer',
    date: '2019-01-01',
    description: 'Djoernal is an accounting mobile app which can be used by individuals as a personal revenue & expense tracker or used by micro-to-medium scale business for booking keeping with proper accounting procedures. This app allows the users to accurately see their incomes and expenses without possessing any prior accounting knowledge',
  });
};
