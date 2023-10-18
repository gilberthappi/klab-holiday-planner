import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import mainRouter from './src/routes';

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', mainRouter);

mongoose.connect(process.env.DB_CONNECTION_PROD).then(() => {
  console.log('Database is connected');
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});