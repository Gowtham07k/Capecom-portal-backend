const Joi = require("joi");

const validateLogin = (data) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().required().messages({
      "string.alphanum": "Username must only contain alphanumeric characters",
      "any.required": "Username is required",
    }),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9@#$%^&+=]{8,16}$"))
      .required()
      .messages({
        "string.pattern.base":
          "Password must be 8-16 characters long and can contain letters, numbers, and @#$%^&+=",
        "any.required": "Password is required",
      }), 
  });

  return schema.validate(data);
};

const validateUser = (data) => {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .required()
      .messages({
        "string.alphanum": "Username must only contain alphanumeric characters",
        "any.required": "Username is required",
      }),
      email: Joi.string()
      .email()
      .required()
      .messages({
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required",
      }),
      password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9@#$%^&+=]{8,16}$"))
      .required()
      .messages({
        "string.pattern.base":
          "Password must be 8-16 characters long and can contain letters, numbers, and @#$%^&+=",
        "any.required": "Password is required",
      }),
      role: Joi.string().required().messages({
        "any.required": "Role is required",
      }),
  });

  return schema.validate(data);
};

module.exports = { validateLogin, validateUser };
