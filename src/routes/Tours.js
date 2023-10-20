import express from 'express';

import {
  getTours, createTours, updateTour,
  deleteTours, getTour
} from '../controllers/tours';
// import { verifyToken } from '../middleware';

const tourRouter = express.Router();

// tourRouter.use(verifyToken);

tourRouter.get('/all', getTours);

tourRouter.get('/:id', getTour);

tourRouter.post('/addNew', createTours);

tourRouter.put('/update', updateTour);

tourRouter.delete('/delete', deleteTours);

export default tourRouter;