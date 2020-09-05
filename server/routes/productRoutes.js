import Router from 'express';
import TokenHandler from '../middlewares/tokenHandler';
import ProductController from '../controllers/productController';

const router = Router();

router.get('/products', TokenHandler.verifyToken, ProductController.retrieveAllProducts);

export default router;
