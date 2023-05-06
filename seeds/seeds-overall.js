/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('overall').del()
  await knex('overall').insert({
    email: 'atras.r@gmail.com',
    name: 'Atras Tudhi',
    about: 'Passionate software engineer. Back-End driver with tolerable Front-End skills. Involved building robust & scalable application.',
    phoneNumber: '62-1381-7215-32',
    address: 'Jakarta, Indonesia'
  });
};
