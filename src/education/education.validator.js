const Joi = require('joi');

const createEducationValidator = Joi.object({
  name: Joi.string().required(),
  major: Joi.string().required(),
  status: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date(),
});

const updateEducationValidator = Joi.object({
  name: Joi.string(),
  major: Joi.string(),
  status: Joi.string(),
  startDate: Joi.date(),
  endDate: Joi.date(),
});

module.exports = {
  createEducationValidator,
  updateEducationValidator,
};
