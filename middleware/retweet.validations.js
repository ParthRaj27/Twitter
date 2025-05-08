const Joi = require("joi");
const retweetschema = Joi.object({
  retweet: Joi.string().min(3).max(30).required().messages({'string.base':'retweet should be between 3-30 character and retweet is required',})
}).options({ abortEarly: true });;

module.exports = retweetschema;
