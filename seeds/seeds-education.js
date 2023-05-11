/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('education').del();
  await knex('education').insert({
    name: 'Hacktiv8 Indonesia',
    major: 'Fullstack Javascript',
    status: 'Graduate',
    startDate: '2018-09-01',
    endDate: '2019-03-01',
  });
};
