import express from 'express';

import {
  getTours, getTour, createTour, createTours, updateTour, deleteTour,
  deleteTours, findTour, findTours, updateTourElement,
} from '../controllers/tours';
import { verifyToken, isAdmin, uploads } from '../middleware';

const tourRouter = express.Router();

tourRouter.use(verifyToken);

tourRouter.get('/all', getTours);

tourRouter.get('/getOneElement', getTour);

tourRouter.get('/findAll/:id', findTours);

tourRouter.get('/findOne/:title', findTour);

tourRouter.post('/addNew', isAdmin, uploads, createTour);

tourRouter.post('/', isAdmin, uploads, createTours);

tourRouter.post('/addMany', isAdmin, createTours);

tourRouter.put('/updateEntireElement',isAdmin, updateTour);

tourRouter.patch('/updatePartiallyElement', isAdmin, updateTourElement);

tourRouter.delete('/deleteOne/:id', isAdmin, deleteTour);

tourRouter.delete('/deleteMany', isAdmin, deleteTours);

export default tourRouter;