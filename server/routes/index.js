import { Router } from 'express';
import authRoutes from './authRoutes';
import productRoutes from './productRoutes';

const router = Router();

router.use(productRoutes);
router.use('/auth', authRoutes);
router.use(productRoutes);

export default router;
