const Joi = require("joi");
const tweetschema = Joi.object({
  title: Joi.string().min(3).max(50).required().messages({'string.base':'retweet should be between 3-30 character and retweet is required',}),
  content: Joi.string().min(3).max(50).required().messages({'string.base':'retweet should be between 3-30 character and retweet is required',})
}).options({ abortEarly: true });;

module.exports = tweetschema;
