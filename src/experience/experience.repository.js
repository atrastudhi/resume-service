const getExperiences = (knex) => {
  return knex.select().table('experience');
}

const createExperience = (knex, payload) => {
  return knex('experience').insert(payload).returning('id');
};

const updateExperience = (knex, experienceId, payload) => {
  return knex('experience').update(payload).where({ id: experienceId }).returning('id');
};

const deleteExperience = (knex, experienceId) => {
  return knex('experience').del().where({ id: experienceId }).returning('id');
};

const experienceRepository = {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};

module.exports = experienceRepository;
