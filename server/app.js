import express from 'express';
import dotenv from 'dotenv';
// routes
import mealRoutes from './routes/mealsRoute';
import menuRoutes from './routes/menusRoute';
import orderRoutes from './routes/orderRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/orders', orderRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

module.exports = app;
