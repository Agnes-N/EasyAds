import ProductHelper from '../helpers/productHelper';

/**
 * This class contains all methods
 * required to handle
 * product endpoints' requests.
 */
class ProductController {
  /**
   * This method handles a request for creating a product.
   * @param {object} req The user's request.
   * @param {object} res The response.
   * @returns {object} The status and some data of the product.
   */
  static async createProduct(req, res) {
    try {
      const { body } = req;
      const ownerId = req.user.id;
      const productCategoryId = req.Category.id;
      const newProduct = {
        userId: ownerId,
        title: body.title,
        price: body.price,
        status: body.status,
        image: body.title,
        categoryId: productCategoryId,
        description: body.description
      };
      const saveProduct = await ProductHelper.saveProduct(newProduct);

      return res.status(201).json({
        status: 201,
        message: `${body.title} product has been created successfully.`,
        data: saveProduct
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong when creating the product',
        error: error.message
      });
    }
  }
}

export default ProductController;
