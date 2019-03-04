import express from 'express';
import authRoute from './routes/auth';
import mealRoutes from './routes/meal';
import orderRoutes from './routes/order';
import menuRoutes from './routes/menu';
import roleRoute from './routes/role';

require('dotenv').config();
// routes


const app = express();
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
