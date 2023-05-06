const Joi = require('joi');

const createExperienceValidator = Joi.object({
  company: Joi.string().required(),
  position: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date(),
  description: Joi.string(),
});

const updateExperienceValidator = Joi.object({
  company: Joi.string(),
  position: Joi.string(),
  startDate: Joi.date(),
  endDate: Joi.date(),
  description: Joi.string(),
});

module.exports = {
  createExperienceValidator,
  updateExperienceValidator,
};
