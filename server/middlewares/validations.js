import { signupSchema, signinSchema } from '../schemas/authSchema';
import productSchema from '../schemas/productSchema';
import idSchema from '../schemas/idValidator';
import ProductHelper from '../helpers/productHelper';

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
   * This method validates the product id sent from the API consumer.
   * @param {object} req The product's request.
   * @param {object} res The response.
   * @param {object} next pass to next method.
   * @returns {object} Error message.
   */
  static validateProductId(req, res, next) {
    const { error } = idSchema.validate({ productId: req.params.productId });
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
        error: `Product ${message}`
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
  static async validateProductData(req, res, next) {
    const { body } = req;
    const { error } = productSchema.validate(body);
    const valid = error == null;
    if (valid) {
      const errors = {};
      const productFound = await ProductHelper.findExistingProduct('id', body.productId);

      if (productFound.length === 0) {
        errors.productId = 'The specified product does not exist!';
      }
      if (Object.keys(errors).length !== 0) {
        return res.status(422).json({
          status: 422,
          error: errors
        });
      }
      req.productId = productFound;
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

  /**
   * This method validates product status from API consumer.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {Function} next pass to next function
   * @returns {object} Error message.
   */
  static async validateProductStatus(req, res, next) {
    const { status } = req.body;
    if (status === 'sold') {
      return next();
    }
    res.status(400).json({ status: 400, error: 'only sold status should be used' });
  }
}

export default Validations;
