import Joi from "joi";
const userScheme = Joi.object({
  name: Joi.string().min(6).required().messages({
    "*": "User name must contain at least 6 charachters",
  }),
  password: Joi.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/),
  achievements: Joi.any(),
}).options({ abortEarly: false });
const userSchemeErrArr = (input) =>
  userScheme.validate(input)?.error?.details.map((err) => {
    return {
      path: err.path[0],
      message: err.message,
    };
  });
export const validateUser = (input) => userSchemeErrArr(input);
