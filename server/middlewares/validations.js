import { signupSchema, signinSchema } from '../schemas/authSchema';
import productSchema from '../schemas/productSchema';
import idSchema from '../schemas/idValidator';

/**
 * This class contains all methods
 * required to validate all
 * sent data from the API consumer.
 */
class Validations {
  /**
   * This method validates the data sent from the API consumer for signing up a user.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next pass to next method.
   * @returns {object} Error message.
   */
  static validateSignUpData(req, res, next) {
    const { error } = signupSchema.validate(req.body);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(',');
      res.status(422).json({
        status: 422,
        message
      });
    }
  }

  /**
   * This method validates the data sent from the API consumer for signing in a user.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next pass to next method.
   * @returns {object} Error message.
   */
  static validateSignInData(req, res, next) {
    const { error } = signinSchema.validate(req.body);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(',');
      res.status(422).json({
        status: 422,
        message
      });
    }
  }

  /**
   * This method validates the user id sent from the API consumer.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next pass to next method.
   * @returns {object} Error message.
   */
  static validateUserId(req, res, next) {
    const { error } = idSchema.validate({ id: req.params.userId });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const {
        details
      } = error;
      const message = details.map((i) => i.message).join(',');
      res.status(422).json({
        status: 422,
        error: `Users ${message}`
      });
    }
  }

  /**
   * This method validates the category id sent from the API consumer.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {object} next pass to next method.
   * @returns {object} Error message.
   */
  static validateCategoryId(req, res, next) {
    const {
      error
    } = idSchema.validate({ id: req.params.categoryId });
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const {
        details
      } = error;
      const message = details.map((i) => i.message).join(',');
      res.status(422).json({
        status: 422,
        error: `Category ${message}`
      });
    }
  }

  /**
     * This method validates product data from the API consumer.
     * @param {object} req The user's request.
     * @param {object} res The response.
     * @param {object} next pass to next method.
     * @returns {object} Error message.
     */
  static validateProductData(req, res, next) {
    const { error } = productSchema.validate(req.body);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(',');
      res.status(422).json({
        status: 422,
        error: message
      });
    }
  }
}

export default Validations;
