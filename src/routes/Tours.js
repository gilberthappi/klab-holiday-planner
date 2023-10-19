import express from 'express';

import {
  getTours, createTours, updateTour,
  deleteTours
} from '../controllers/tours';
import { verifyToken, isAdmin, uploads } from '../middleware';

const tourRouter = express.Router();

tourRouter.use(verifyToken);

tourRouter.get('/all', getTours);

tourRouter.post('/addNew', isAdmin, createTours);

tourRouter.put('/update',isAdmin, updateTour);

tourRouter.delete('/delete', isAdmin, deleteTours);

export default tourRouter;