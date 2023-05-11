/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('overall').del()
  await knex('overall').insert({
    email: 'atras.r@gmail.com',
    name: 'Muh. Atras Rais Tudhi Saidi',
    about: 'Passionate software engineer. Back-End driver with tolerable Front-End skills. Involved building robust & scalable application.',
    phoneNumber: '6281381721532',
    address: 'Jakarta, Indonesia'
  });
};
