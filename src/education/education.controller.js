const {
  createEducationValidator,
  updateEducationValidator,
} = require('./education.validator');
const educationService = require('./education.service');

const createEducation = {
  method: 'POST',
  path: '/education',
  options: {
    validate: {
      payload: createEducationValidator,
    },
    handler: (req, res) => educationService.createEducation(req, res),
  },
};

const updateEducation = {
  method: 'PUT',
  path: '/education/{educationId}',
  options: {
    validate: {
      payload: updateEducationValidator
    },
    handler: (req, res) => educationService.updateEducation(req, res),
  },
};

const deleteEducation = {
  method: 'DELETE',
  path: '/education/{educationId}',
  options: {
    handler: (req, res) => educationService.deleteEducation(req, res),
  },
}

module.exports = [
  createEducation,
  updateEducation,
  deleteEducation
];
