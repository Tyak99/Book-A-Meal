import express from 'express';
import mealRoutes from './routes/mealsRoute';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/meals', mealRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('port has started');
});
