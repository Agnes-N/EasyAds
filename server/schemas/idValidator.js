import Joi from '@hapi/joi';

const idSchemas = Joi.object().keys({
  productId: Joi.number().integer().required(),
});

export default idSchemas;
