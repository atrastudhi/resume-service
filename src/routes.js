const overallController = require('./overall/overall.controller');
const experienceController = require('./experience/experience.controller');
const skillController = require('./skill/skill.controller');
const projectController = require('./project/project.controller');
const educationController = require('./education/education.controller');

const routes = [
  ...overallController,
  ...experienceController,
  ...skillController,
  ...projectController,
  ...educationController,
];

module.exports = routes;