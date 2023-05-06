const Joi = require('joi');

const createProjecValidator = Joi.object({
  name: Joi.string().required(),
  position: Joi.string().required(),
  date: Joi.date().required(),
  description: Joi.string(),
});

const updateProjectValidator = Joi.object({
  name: Joi.string(),
  position: Joi.string(),
  date: Joi.date(),
  description: Joi.string(),
});

module.exports = {
  createProjecValidator,
  updateProjectValidator,
};
