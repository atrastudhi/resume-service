const JoiBase = require('joi');
const JoiDate = require('@hapi/joi-date');

const Joi = JoiBase.extend(JoiDate);

const createExperienceValidator = Joi.object({
  company: Joi.string().required(),
  position: Joi.string().required(),
  startDate: Joi.date()
    .format('YYYY-MM-DD')
    .required(),
  endDate: Joi.date().format('YYYY-MM-DD').allow(null),
  description: Joi.string().allow(null),
});

const updateExperienceValidator = Joi.object({
  company: Joi.string(),
  position: Joi.string(),
  startDate: Joi.date().format('YYYY-MM-DD'),
  endDate: Joi.date().format('YYYY-MM-DD').allow(null),
  description: Joi.string().allow(null),
});

module.exports = {
  createExperienceValidator,
  updateExperienceValidator,
};
