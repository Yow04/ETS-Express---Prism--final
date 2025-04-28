import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Recipe Cookbook API',
    version: '1.0.0',
    description: 'API for managing recipes and user authentication',
    contact: {
      email: 'admin@recipecook.com'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server'
    }
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key'
      }
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            format: 'email',
            example: 'john@example.com'
          },
          password: {
            type: 'string',
            format: 'password',
            example: 'password123'
          }
        }
      },
      Recipe: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1
          },
          title: {
            type: 'string',
            example: 'Spaghetti Carbonara'
          },
          ingredients: {
            type: 'string',
            example: 'Pasta, eggs, bacon, parmesan, black pepper'
          },
          instructions: {
            type: 'string',
            example: 'Cook pasta. Mix eggs and cheese. Combine and serve.'
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './swagger-docs/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec; 