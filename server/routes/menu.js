import express from 'express';
import menuController from '../controllers/menu';
import passportService from '../services/passport';
import passport from 'passport';

const router = express();


const requireAuth = passport.authenticate('jwt', {session: false});


router.get('/',requireAuth, menuController.list);
router.post('/', menuController.create);
export default router;
