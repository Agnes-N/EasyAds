import Joi from '@hapi/joi';

const productSchema = Joi.object().keys({
  title: Joi.string().required().trim(),
  price: Joi.string().required().trim(),
  status: Joi.string().required().trim(),
  image: Joi.string().required(),
  categoryId: Joi.number().required(),
  description: Joi.string().required().trim(),
});

export default productSchema;
