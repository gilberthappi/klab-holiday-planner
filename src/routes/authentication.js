import express from 'express';
import { signUp, logIn, changePassword } from '../controllers/authentication';
import { verifyToken } from '../middleware';

const authRouter = express.Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', logIn);
authRouter.post('/changePassword', verifyToken, changePassword);

export default authRouter;