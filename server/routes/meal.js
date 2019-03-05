import express from 'express';
import passport from 'passport';
import mealController from '../controllers/meal';
import passportService from '../services/passport';

const router = express.Router();

const requireAuth = passport.authenticate('jwt', { session: false });

/**
 * @swagger
 * definitions:
 *   Meal:
 *     properties:
 *       name:
 *         type: string
 *       price:
 *         type: integer
 *       catererId:
 *         type: integer
 */

/**
 * @swagger
 * /api/v1/meal/caterer/{id}:
 *   get:
 *     summary: List all the meal by caterer id
 *     description: Returns a list of all meal a caterer created
 *     tags:
 *       - Meal
 *     parameters:
 *       - name: id
 *         description: Caterer's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: An array of meals
 *         schema:
 *           $ref: '#/definitions/Meal'
 */

/**
 * @swagger
 * /api/v1/meal:
 *   post:
 *     tags:
 *       - Meal
 *     description: Creates a new meal
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: meal
 *         description: meal object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Meal'
 *     responses:
 *       201:
 *         description: Successfully created
 */

/**
 * @swagger
 * /api/v1/meal/{id}:
 *   put:
 *     tags:
 *       - Meal
 *     description: Updates a single meal
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Meal
 *         description: Meal field to be updated
 *         in: body
 *         schema:
 *            $ref: '#/definitions/Meal'
 *     responses:
 *       200:
 *         description: Successfully updated successfully
 */

/**
 * @swagger
 * /api/v1/meal/{id}:
 *   delete:
 *     tags:
 *       - Meal
 *     description: Deletes a single meal
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Caterer's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */

router.post('/', requireAuth, mealController.create);
router.get('/caterer/:id', requireAuth, mealController.list);
router.put('/:id', requireAuth, mealController.editMeal);
router.delete('/:id', requireAuth, mealController.delete);

export default router;
