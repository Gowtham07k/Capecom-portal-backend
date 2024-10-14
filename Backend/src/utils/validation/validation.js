const Joi = require("joi");

const validateLogin = (data) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().required(),
    password: Joi.string()
      .min(8)
      .max(16)
      .pattern(new RegExp("^[a-zA-Z0-9@#$%^&+=]{8,30}$"))
      .required(),
  });

  return schema.validate(data);
};

module.exports = { validateLogin };
