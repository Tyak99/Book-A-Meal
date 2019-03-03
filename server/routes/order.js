import express from 'express';

const router = express();

router.get('/', (req, res) => {
  res.send('order here');
});
export default router;
