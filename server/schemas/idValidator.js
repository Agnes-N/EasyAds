/* eslint-disable import/prefer-default-export */
import Joi from '@hapi/joi';

export const idSchema = Joi.object().keys({
  id: Joi.number().integer().required()
});
