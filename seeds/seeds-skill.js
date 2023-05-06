/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('skill').del();
  await knex('skill').insert(
    [
      {
        name: 'Node.JS',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'SQL & NoSQL',
      },
      {
        name: 'React.JS',
      },
      {
        name: 'Web Scraping',
      },
      {
        name: 'Google Cloud Platform (GCP)',
      },
      {
        name: 'Amazon Web Service (AWS)',
      },
      {
        name: 'Digital Ocean (DO)',
      },
      {
        name: 'Git',
      },
      {
        name: 'Communication',
      }
    ]
  );
};
