const Joi = require("joi");
const passwordschema = Joi.object({
  password: Joi.string()
    .min(3)
    .max(8)
    .required()
    .messages({ "string.min": "password should has more than 3 characters" ,
        "string.max":"password should has less than 8 characters",
        "string.empty":"pasword is required"
    }),
    cpassword: Joi.any().valid(Joi.ref('password')).required()
    .messages({ "string.min": "password should has more than 3 characters" ,
        "any.only":"password and confirm password should match",
        "string.empty":"confirm spasword is required"
    }),
}).options({ abortEarly: true });

module.exports = passwordschema;
