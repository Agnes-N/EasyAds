import authHelper from '../helpers/userHelper';
import ProductHelper from '../helpers/productHelper';
import TokenHelper from '../helpers/tokenHelper';

/**
 * This class contains methods
 * required to check specific users
 * in the database.
 */
class checkUser {
  /**
   * This method verifies whether email is used.
   * @param {object} req the user's request.
   * @param {object} res the response.
   * @param {Function} next pass to next function.
   * @returns {object} message indicating used email.
   */
  static async verifyUsedEmail(req, res, next) {
    try {
      const { email } = req.body;
      const usedEmail = await authHelper.findUser({ email });
      if (usedEmail === null) {
        next();
      } else {
        res.status(409).send({
          status: 409,
          message: 'The specified email is already taken'
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong while verifying used email',
        error: error.message
      });
    }
  }

  /**
   * This method verifies profile owner.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @param {Function} next pass to next function
   * @returns {object} message indicating an error.
   */
  static async verifyProductOwnership(req, res, next) {
    const { token } = req.headers;
    try {
      const data = TokenHelper.verifyToken(token);
      const { id } = data;
      const { productId } = req.params;

      const foundProduct = await ProductHelper.findExistingProduct('id', productId);
      const productFound = foundProduct[0].dataValues;
      if (productFound.userId === undefined) {
        return res.status(404).json({
          status: 404,
          error: 'No such product found!'
        });
      } if (productFound.userId !== id) {
        return res.status(404).json({
          status: 404,
          error: 'Make sure you own the product!'
        });
      }
      next();
    } catch (error) {
      return res.status(404).json({
        status: 404,
        message: 'This product does not exit.'
      });
    }
  }
}
export default checkUser;
