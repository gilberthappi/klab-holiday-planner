import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import mainRouter from './src/routes';
// import { log } from 'console';

require('dotenv').config();

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', mainRouter);

app.get("/",(req,res)=>{
 res.status(200).json({message:"Welcome to the API"})
});
mongoose.connect(process.env.DB_CONNECTION_PROD).then(() => {
  console.log('Database is connected');
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});