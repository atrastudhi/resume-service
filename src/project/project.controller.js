const {
  createProjecValidator,
  updateProjectValidator,
} = require('./project.validator')
const projectService = require('./project.service');

const createProject = {
  method: 'POST',
  path: '/project',
  options: {
    validate: {
      payload: createProjecValidator,
    },
    handler: (req, res) => projectService.createProject(req, res),
  },
}

const updateProject = {
  method: 'PUT',
  path: '/project/{projectId}',
  options: {
    validate: {
      payload: updateProjectValidator,
    },
    handler: (req, res) => projectService.updateProject(req, res),
  },
}

const deleteProject = {
  method: 'DELETE',
  path: '/project/{projectId}',
  options: {
    handler: (req, res) => projectService.deleteProject(req, res),
  },
}

module.exports = [
  createProject,
  updateProject,
  deleteProject,
];
