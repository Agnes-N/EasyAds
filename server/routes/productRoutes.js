import Router from 'express';
import TokenHandler from '../middlewares/tokenHandler';
import ProductController from '../controllers/productController';
import Validations from '../middlewares/validations';

const router = Router();

router.get('/products', TokenHandler.verifyToken, ProductController.retrieveAllProducts);
router.get('/products/:productId', TokenHandler.verifyToken, Validations.validateProductId, ProductController.retrieveOneProduct);

export default router;
