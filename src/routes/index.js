import express from 'express';
import authRouter from './authentication';

const mainRouter = express.Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/tour', authRouter);

export default mainRouter;