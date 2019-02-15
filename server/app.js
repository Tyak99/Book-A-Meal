/* eslint-disable indent */
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});
const PORT = 3000;
app.listen(PORT);
