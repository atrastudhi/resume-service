const getEducations = (knex) => {
  return knex.select().table('education');
}

const createEducation = (knex, payload) => {
  return knex('education').insert(payload).returning('id');
};

const updateEducation = (knex, educationId, payload) => {
  return knex('education').update(payload).where({ id: educationId }).returning('id');
};

const deleteEducation = (knex, educationId) => {
  return knex('education').del().where({ id: educationId }).returning('id');
};

const educationRepository = {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
};

module.exports = educationRepository;
