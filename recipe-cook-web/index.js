import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/router.js';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger-docs/swagger.js';

const app = express();
const PORT = process.env.PORT || 3000;

// for CORS
app.use(cors());

// for middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// for routing
app.use(router);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
