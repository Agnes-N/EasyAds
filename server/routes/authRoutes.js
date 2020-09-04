import { Router } from 'express';
import authController from '../controllers/authController';
import validateAuth from '../middlewares/validateAuth';
// import checkUser from '../middlewares/checkUser';

const router = Router();

router.post('/signup', validateAuth.validateSignUpData, authController.signUp);

export default router;
