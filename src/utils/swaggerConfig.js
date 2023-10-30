// swaggerConfig.js
export const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Holiday Tours API',
        version: '1.0.0',
        description: 'Holiday Tours API Documentation',
      },
      servers: [
        {
          url: 'http://localhost:1500/api/v1',
        },
        {
          url: 'https://holiday-api-zj3a.onrender.com/api/v1',
        },
      ],
    },
    apis: ['./src/routes/*.js'],
  };
  