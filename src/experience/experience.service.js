const experienceRepository = require('./experience.repository');

const createExperience = async (req, res) => {
  const { knex, payload } = req;
  try {
    const [experience] = await experienceRepository.createExperience(knex, payload);
    return res.response(experience).code(201);
  } catch (err) {
    console.error('failed to create experience', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
};

const updateExperience = async (req, res) => {
  const { knex, params, payload } = req;
  try {
    const [experience] = await experienceRepository.updateExperience(knex, params.experienceId, payload);
    return res.response(experience).code(200);
  } catch (err) {
    console.error('failed to update experience', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const deleteExperience = async (req, res) => {
  const { knex, params } = req;
  try {
    const [experience] = await experienceRepository.deleteExperience(knex, params.experienceId);
    return res.response(experience).code(200);
  } catch (err) {
    console.error('failed to delete experience', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const experienceService = {
  createExperience,
  updateExperience,
  deleteExperience,
};

module.exports = experienceService;
