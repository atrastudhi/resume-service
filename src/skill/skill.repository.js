const getSkills = (knex) => {
  return knex.select().table('skill');
}

const createSkill = (knex, payload) => {
  return knex('skill').insert(payload).returning('id');
};

const updateSkill = (knex, skillId, payload) => {
  return knex('skill').update(payload).where({ id: skillId }).returning('id');
};

const deleteSkill = (knex, skillId) => {
  return knex('skill').del().where({ id: skillId }).returning('id');
};

const skillRepository = {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};

module.exports = skillRepository;
