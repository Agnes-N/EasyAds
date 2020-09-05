import { Router } from 'express';
import authController from '../controllers/authController';
import validateAuth from '../middlewares/validateAuth';
import checkUser from '../middlewares/checkUser';

const router = Router();

router.post('/signup', validateAuth.validateSignUpData, checkUser.verifyUsedEmail, authController.signUp);
router.post('/signin', validateAuth.validateSignInData, authController.signIn);

export default router;
