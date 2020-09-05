/* eslint-disable import/prefer-default-export */
import Joi from '@hapi/joi';

export const productSchema = Joi.object().keys({
  title: Joi.string().alphanum().min(3).max(300)
    .required()
    .trim(),
  price: Joi.number().required(),
  status: Joi.string().alphanum().min(6).max(30)
    .required(),
  image: Joi.string().alphanum().min(3).max(300)
    .required(),
  description: Joi.string().alphanum().min(10).max(300)
    .required()
    .trim(),
});
