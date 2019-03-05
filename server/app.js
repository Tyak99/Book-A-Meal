import express from 'express';
import path from 'path';
import authRoute from './routes/auth';
import mealRoutes from './routes/meal';
import orderRoutes from './routes/order';
import menuRoutes from './routes/menu';
import roleRoute from './routes/role';

const swaggerJSDoc = require('swagger-jsdoc');


require('dotenv').config();
// routes
const app = express();


// -- setup up swagger-jsdoc --
const swaggerDefinition = {
  info: {
    title: 'Book a meal',
    version: '1.0.0',
    description: 'All things meal',
  },
  host: 'https://protected-waters-12782.herokuapp.com',
  basePath: '/',
};
// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./server/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'redoc.html'));
});
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/meal', mealRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/role', roleRoute);

app.get('/', (req, res) => {
  res.send('<h1> Welcome to book a meal </h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server started');
});

module.exports = app;
