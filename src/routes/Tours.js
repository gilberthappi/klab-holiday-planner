import express from 'express';

import {
  getTours, getTour, createTour, createTours, updateTour, deleteTour,
  deleteTours, findTour, findTours, updateTourElement,
} from '../controllers/tours';
import { verifyToken, isAdmin, uploads } from '../middleware';

const tourRouter = express.Router();

tourRouter.use(verifyToken);

tourRouter.get('/all', getTours);

tourRouter.get('/getOneElement/:id', getTour);

tourRouter.get('/findAll/:id', findTours);

tourRouter.get('/findOne/:title', findTour);

tourRouter.post('/addNew', createTour);

tourRouter.post('/', uploads, createTour);

tourRouter.post('/', isAdmin, createTours);

tourRouter.post('/addMany', createTours);

tourRouter.put('/updateEntireElement/:id', updateTour);

tourRouter.patch('/updatePartiallyElement/:id', updateTourElement);

tourRouter.delete('/deleteOne/:id', deleteTour);

tourRouter.delete('/deleteMany/:title', deleteTours);

export default tourRouter;