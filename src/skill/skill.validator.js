const Joi = require('joi');

const createSkillValidator = Joi.object({
  name: Joi.string().required(),
});

const updateSkillValidator = Joi.object({
  name: Joi.string(),
});

module.exports = {
  createSkillValidator,
  updateSkillValidator
}