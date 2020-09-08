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

  /**
   * This method checks whether the product exists
   * @param {string} column a value column where value belongs.
   * @param {string} value actual value.
   * @returns {object} User data.
   */
  static async findExistingProduct(column, value) {
    try {
      const { Products } = models;
      const ProductExist = await Products.findAll({
        where: {
          [column]: value
        }
      });
      return ProductExist;
    } catch (error) {
      return error;
    }
  }

  /**
   * This method updates a product with email.
   * @param {string} id product email.
   * @param {object} data product data.
   * @returns {object} product data.
   */
  static async updateProductWithId(id, data) {
    try {
      const { Products } = models;
      const affectedRows = await Products.update(data, {
        where: { id },
        returning: true,
        plain: true
      });
      if (affectedRows) {
        const product = await Products.findOne({
          where: { id }
        });
        return product;
      }
    } catch (error) {
      return error;
    }
  }
}

export default ProductHelper;
