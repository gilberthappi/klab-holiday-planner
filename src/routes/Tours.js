import express from 'express';
import {
  getTours, createTour, createTours, updateTour,
  deleteTours
} from '../controllers/tours';
// import { verifyToken, isAdmin, uploads } from '../middleware';
import { uploaded } from '../middleware';
const tourRouter = express.Router();
// tourRouter.use(verifyToken);

tourRouter.get('/all', getTours);

tourRouter.post('/addNew',  uploaded, createTour);

tourRouter.post('/addNews', uploaded, createTours);

tourRouter.put('/update', updateTour);

tourRouter.delete('/delete', deleteTours);

export default tourRouter;