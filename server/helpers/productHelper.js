import models from '../sequelize/models';

/**
 * This class contains
 * methods for handling
 * product operations
 */
class ProductHelper {
  /**
 * This method checks whether the product exists
 * @param {string} column a column where value belongs.
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
     * This method saves a product in the database.
     * @param {object} product The request sent by a user.
     * @returns {object} product data.
     */
  static async saveProduct(product) {
    try {
      const { Products } = models;
      const createdProduct = await Products.create({
        ...product,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        fields: [
          'name',
          'country',
          'city',
          'createAt',
          'updatedAt'
        ]
      });
      return createdProduct;
    } catch (error) {
      return error;
    }
  }
}

export default ProductHelper;
