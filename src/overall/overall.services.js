const overallUtils = require('./overall.utils');
const overallRepository = require('./overall.repository');
const experienceRepository = require('../experience/experience.repository');
const skillRepository = require('../skill/skill.repository');
const projectRepository = require('../project/project.repository');
const educationRepository = require('../education/education.repository');

const getOverall = async (req, res) => {
  const { knex } = req;
  try {
    const [overall] = await overallRepository.getOverall(knex);
    const experiences = await experienceRepository.getExperiences(knex);
    const skills = await skillRepository.getSkills(knex);
    const projects = await projectRepository.getProjects(knex);
    const educations = await educationRepository.getEducations(knex);

    const result = overallUtils.mapOverallResult(
      overall,
      experiences,
      skills,
      projects,
      educations,
    );

    return res.response(result).code(200);
  } catch (err) {
    console.error('failed to get overall', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const updateOverall = async (req, res) => {
  const { knex, payload } = req;
  try {
    const [overall] = await overallRepository.updateOverall(knex, payload);
    return res.response(overall).code(200);
  } catch (err) {
    console.error('failed to update overall', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
};

const overallService = {
  getOverall,
  updateOverall,
};

module.exports = overallService;
