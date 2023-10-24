import express from 'express';
import authRouter from './authentication';
import tourRouter from './Tours';
import bookingRouter from './booking';

const mainRouter = express.Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/tour', tourRouter);
mainRouter.use('/booking', bookingRouter)

export default mainRouter;