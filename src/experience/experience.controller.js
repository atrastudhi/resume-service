const {
  createExperienceValidator,
  updateExperienceValidator,
} = require('./experience.validator');
const experienceService = require('./experience.service');

const createExperience = {
  method: 'POST',
  path: '/experience',
  options: {
    validate: {
      payload: createExperienceValidator,
    },
    handler: (req, res) => experienceService.createExperience(req, res),
  },
};

const updateExperience = {
  method: 'PUT',
  path: '/experience/{experienceId}',
  options: {
    validate: {
      payload: updateExperienceValidator
    },
    handler: (req, res) => experienceService.updateExperience(req, res),
  },
};

const deleteExperience = {
  method: 'DELETE',
  path: '/experience/{experienceId}',
  options: {
    handler: (req, res) => experienceService.deleteExperience(req, res),
  },
}

module.exports = [
  createExperience,
  updateExperience,
  deleteExperience
];
