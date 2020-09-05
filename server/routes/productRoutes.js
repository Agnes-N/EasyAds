import { Router } from 'express';
import Validations from '../middlewares/validations';
import ProductController from '../controllers/productController';
import TokenHandler from '../middlewares/tokenHandler';

const router = Router();

router.post('/products/', TokenHandler.verifyToken, Validations.validateProductData, ProductController.createProduct);

export default router;
