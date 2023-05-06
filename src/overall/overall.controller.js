const {
  updateOverallValidator,
} = require('./overall.validator');
const overallService = require('./overall.services');

const getOverall = {
  method: 'GET',
  path: '/overall',
  options: {
    handler: (req, res) => overallService.getOverall(req, res),
  },
};

const updateOverall = {
  method: 'PUT',
  path: '/overall',
  options: {
    validate: {
      payload: updateOverallValidator
    },
    handler: (req, res) => overallService.updateOverall(req, res),
  },
};

module.exports = [
  getOverall,
  updateOverall,
];
