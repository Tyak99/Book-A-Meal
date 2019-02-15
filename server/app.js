import express from 'express';
import mealRoutes from './routes/mealsRoute';

const app = express();

app.use('/api/v1/meals', mealRoutes);

const PORT = 3000;
app.listen(PORT);
