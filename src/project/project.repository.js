const getProjects = (knex) => {
  return knex.select().table('project');
}

const createProject = (knex, payload) => {
  return knex('project').insert(payload).returning('id');
};

const updateProject = (knex, projectId, payload) => {
  return knex('project').update(payload).where({ id: projectId }).returning('id');
};

const deleteProject = (knex, projectId) => {
  return knex('project').del().where({ id: projectId }).returning('id');
};

const projectRepository = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};

module.exports = projectRepository;
