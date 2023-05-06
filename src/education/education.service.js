const educationRepository = require('./education.repository');

const createEducation = async (req, res) => {
  const { knex, payload } = req;
  try {
    const [education] = await educationRepository.createEducation(knex, payload);
    return res.response(education).code(201);
  } catch (err) {
    console.error('failed to create education', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
};

const updateEducation = async (req, res) => {
  const { knex, params, payload } = req;
  try {
    const [education] = await educationRepository.updateEducation(knex, params.educationId, payload);
    return res.response(education).code(200);
  } catch (err) {
    console.error('failed to update education', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const deleteEducation = async (req, res) => {
  const { knex, params } = req;
  try {
    const [education] = await educationRepository.deleteEducation(knex, params.educationId);
    return res.response(education).code(200);
  } catch (err) {
    console.error('failed to delete education', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const educationService = {
  createEducation,
  updateEducation,
  deleteEducation,
};

module.exports = educationService;
