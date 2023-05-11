const JoiBase = require('joi');
const JoiDate = require('@hapi/joi-date');

const Joi = JoiBase.extend(JoiDate);

const createProjecValidator = Joi.object({
  name: Joi.string().required(),
  position: Joi.string().required(),
  date: Joi.date().format('YYYY-MM-DD').required(),
  description: Joi.string().allow(null),
});

const updateProjectValidator = Joi.object({
  name: Joi.string(),
  position: Joi.string(),
  date: Joi.date().format('YYYY-MM-DD'),
  description: Joi.string().allow(null),
});

module.exports = {
  createProjecValidator,
  updateProjectValidator,
};
