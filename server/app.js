import express from 'express';
import dotenv from 'dotenv';
// routes
import authRoute from './routes/auth';
import mealRoutes from './routes/meal';
import orderRoutes from './routes/order';
import menuRoutes from './routes/menu';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/meal', mealRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/menu', menuRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server started');
});

module.exports = app;
