import * as Joi from 'joi';

const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().min(6).required();
const emailObjectSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

export default emailObjectSchema;
