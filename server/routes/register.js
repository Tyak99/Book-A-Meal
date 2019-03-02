import express from 'express';
import registerController from '../controllers/register';

const router = express.Router();

router.post('/', registerController.create);

export default router;
