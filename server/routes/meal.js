import express from 'express';
import passport from 'passport';
import mealController from '../controllers/meal';
import passportService from '../services/passport';

const router = express.Router();

const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/', requireAuth, mealController.create);
router.get('/caterer/:id', requireAuth, mealController.list);
router.put('/:id', requireAuth, mealController.editMeal);
router.delete('/:id', requireAuth, mealController.delete);

export default router;
