import express from 'express';

const router = express();

router.get('/', (req, res) => {
  res.send('oopss');
});

export default router;
