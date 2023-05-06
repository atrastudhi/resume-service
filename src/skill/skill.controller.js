const {
  createSkillValidator,
  updateSkillValidator,
} = require('./skill.validator')
const skillService = require('./skill.service');

const createSkill = {
  method: 'POST',
  path: '/skill',
  options: {
    validate: {
      payload: createSkillValidator,
    },
    handler: (req, res) => skillService.createSkill(req, res),
  },
}

const updateSkill = {
  method: 'PUT',
  path: '/skill/{skillId}',
  options: {
    validate: {
      payload: updateSkillValidator,
    },
    handler: (req, res) => skillService.updateSkill(req, res),
  },
}

const deleteSkill = {
  method: 'DELETE',
  path: '/skill/{skillId}',
  options: {
    handler: (req, res) => skillService.deleteSkill(req, res),
  },
}

module.exports = [
  createSkill,
  updateSkill,
  deleteSkill,
];
