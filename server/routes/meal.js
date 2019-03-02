import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('meal route');
});
export default router;
