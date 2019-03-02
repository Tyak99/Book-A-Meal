import express from 'express';
import dotenv from 'dotenv';
// routes
import registerRoute from './routes/register';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.use('/api/v1/auth/signup', registerRoute);

app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server started')
});

module.exports = app;
