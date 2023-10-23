import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import mainRouter from './src/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

require('dotenv').config();

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', mainRouter);

// Define the Swagger options and generate the Swagger specification
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Holiday Tours API',
      version: '1.0.0',
      description: 'Holiday Tours API Documentation',
    },
   servers: [
  {
    url: 'http://localhost:1500/api/v1', // Adjust the port to match your configuration
  },
  {
    url: 'https://holiday-api-zj3a.onrender.com/api/v1', // Adjust the port to match your configuration
  },
],
  },
  apis: ['./src/routes/*.js'], // Use your actual API route files here
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API' });
});

mongoose.connect(process.env.DB_CONNECTION_PROD).then(() => {
  console.log('Database is connected');
});

app. listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
