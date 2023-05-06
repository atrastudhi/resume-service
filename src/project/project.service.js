const projectRepository = require('./project.repository');

const createProject = async (req, res) => {
  const { knex, payload } = req;
  try {
    const [project] = await projectRepository.createProject(knex, payload);
    return res.response(project).code(201);
  } catch (err) {
    console.error('failed to create project', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
};

const updateProject = async (req, res) => {
  const { knex, params, payload } = req;
  try {
    const [project] = await projectRepository.updateProject(knex, params.projectId, payload);
    return res.response(project).code(200);
  } catch (err) {
    console.error('failed to update project', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const deleteProject = async (req, res) => {
  const { knex, params } = req;
  try {
    const [project] = await projectRepository.deleteProject(knex, params.projectId);
    return res.response(project).code(200);
  } catch (err) {
    console.error('failed to delete project', err);
    return res.response({ message: 'internal server error' }).code(500);
  }
}

const projectService = {
  createProject,
  updateProject,
  deleteProject,
};

module.exports = projectService;
