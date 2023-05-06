const skillRepository = require('./skill.repository');

const createSkill = async (req, res) => {
  const { knex, payload } = req;
  try {
    const [skill] = await skillRepository.createSkill(knex, payload);
    return res.response(skill).code(201);
  } catch (err) {
    console.error('failed to create skill', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
};

const updateSkill = async (req, res) => {
  const { knex, params, payload } = req;
  try {
    const [skill] = await skillRepository.updateSkill(knex, params.skillId, payload);
    return res.response(skill).code(200);
  } catch (err) {
    console.error('failed to update skill', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const deleteSkill = async (req, res) => {
  const { knex, params } = req;
  try {
    const [skill] = await skillRepository.deleteSkill(knex, params.skillId);
    return res.response(skill).code(200);
  } catch (err) {
    console.error('failed to delete skill', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const skillService = {
  createSkill,
  updateSkill,
  deleteSkill,
};

module.exports = skillService;
