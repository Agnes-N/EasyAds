import Router from 'express';
import TokenHandler from '../middlewares/tokenHandler';
import ProductController from '../controllers/productController';
import Validations from '../middlewares/validations';
import checkUser from '../middlewares/checkUser';

const router = Router();

router.post('/products', TokenHandler.verifyToken, Validations.validateProductData, ProductController.registerProduct);
router.get('/products', TokenHandler.verifyToken, ProductController.retrieveAllProducts);
router.get('/products/:productId', TokenHandler.verifyToken, Validations.validateProductId, ProductController.retrieveOneProduct);
router.patch('/products/:productId/status', TokenHandler.verifyToken, Validations.validateProductId, Validations.validateProductStatus, checkUser.verifyProductOwnership, ProductController.markProductAsSold);
router.patch('/products/:productId/price', TokenHandler.verifyToken, Validations.validateProductId, checkUser.verifyProductOwnership, ProductController.updateProductPrice);

export default router;
