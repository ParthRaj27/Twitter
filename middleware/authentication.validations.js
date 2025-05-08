const Joi = require("joi");
const schema = Joi.object({
  fname: Joi.string().alphanum().min(3).max(30).required().messages({'string.base':'first name is required',}),
  lname: Joi.string().alphanum().min(3).max(30).required().messages({
    'string.base':'last name is required',
  }),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: false },
  }).required().messages({
    'string.empty':'email is required',
    'string.email':'email is should in proper format',
  }),
  phonenumber : Joi.string().pattern(new RegExp('^[0-9]{10}$')).required().messages({'string.pattern.base':'phone number should be in 10 digits',
    'string.empty':'phone number should be in digits'
  }),
}).options({ abortEarly: true });;

module.exports = schema;
