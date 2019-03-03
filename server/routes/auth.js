import express from 'express';
import passport from 'passport';
import passportService from '../services/passport';
import authController from '../controllers/authController';

const router = express.Router();

const requireSignIn = passport.authenticate('local', { session: false });

router.post('/signup', authController.create);
router.post('/login',requireSignIn, authController.login);

export default router;
