# Recipe Cook Web API Documentation

This project uses Swagger for API documentation. The documentation is available at the `/api-docs` endpoint when the server is running.

## How to Access the Documentation

1. Start the server:
   ```
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000/api-docs
   ```

## Available Endpoints

### Authentication

- `POST /register` - Register a new user
- `POST /login` - Login and get an API key

### Recipes

- `POST /recipes/custom` - Create a new recipe
- `GET /recipes/custom` - Get all recipes for the authenticated user
- `PUT /recipes/custom/:id` - Update a specific recipe
- `DELETE /recipes/custom/:id` - Delete a specific recipe

## Using the API

1. Register a new user
2. Login to obtain an API key
3. Use the API key in the header for authenticated endpoints (x-api-key)

## Documentation Structure

- `swagger.js` - Main Swagger configuration
- `routes/*.js` - Route-specific documentation 