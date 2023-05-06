const Joi = require('joi');

const updateOverallValidator = Joi.object({
  name: Joi.string(),
  about: Joi.string(),
  phoneNumber: Joi.string(),
  address: Joi.string(),
});

module.exports = {
  updateOverallValidator,
};
