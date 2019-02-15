import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('well, welcome');
});

export default router;
