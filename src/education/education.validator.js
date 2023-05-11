const JoiBase = require('joi');
const JoiDate = require('@hapi/joi-date');

const Joi = JoiBase.extend(JoiDate);

const createEducationValidator = Joi.object({
  name: Joi.string().required(),
  major: Joi.string().required(),
  status: Joi.string().required(),
  startDate: Joi.date().format('YYYY-MM-DD').required(),
  endDate: Joi.date().format('YYYY-MM-DD').allow(null),
});

const updateEducationValidator = Joi.object({
  name: Joi.string(),
  major: Joi.string(),
  status: Joi.string(),
  startDate: Joi.date().format('YYYY-MM-DD'),
  endDate: Joi.date().format('YYYY-MM-DD').allow(null),
});

module.exports = {
  createEducationValidator,
  updateEducationValidator,
};
