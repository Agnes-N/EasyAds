import models from '../sequelize/models';

/**
 * This class contains methods
 * that handle product-related operations
 */
class ProductHelper {
  /**
   * This method checks whether the product exists
   * @param {string} column a value column where value belongs.
   * @param {string} value actual value.
   * @returns {object} User data.
   */
  static async retrieveProducts() {
    try {
      const { Products } = models;
      const Product = await Products.findAndCountAll();
      return Product;
    } catch (error) {
      return error;
    }
  }
}

export default ProductHelper;
