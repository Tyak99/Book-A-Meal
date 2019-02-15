import express from 'express';

// routes
import mealRoutes from './routes/mealsRoute';
import menuRoutes from './routes/menusRoute';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menus', menuRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('port has started');
});
