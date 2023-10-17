import express from 'express';
import authRouter from './authentication';
import tourRouter from './Tours';

const mainRouter = express.Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/tour', tourRouter);

export default mainRouter;