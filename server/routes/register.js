import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

router.post('/', authController.create);
router.get('/', authController.list)

export default router;
