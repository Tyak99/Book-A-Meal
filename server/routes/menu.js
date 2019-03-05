import express from 'express';
import passport from 'passport';
import menuController from '../controllers/menu';
import passportService from '../services/passport';

const router = express();

const requireAuth = passport.authenticate('jwt', { session: false });


/**
 * @swagger
 * definitions:
 *   Menu:
 *     properties:
 *       name:
 *         type: string
 *       price:
 *         type: integer
 *       meals:
 *         type: array
 *       catererId:
 *         type: integer
 */

/**
 * @swagger
 * /api/v1/menu:
 *   get:
 *     summary: List all the menu
 *     description: Returns a list of all menu available
 *     tags:
 *       - Menu
 *     responses:
 *       200:
 *         description: An array of menus
 *         schema:
 *           $ref: '#/definitions/Menu'
 */

/**
 * @swagger
 * /api/v1/menu:
 *   post:
 *     tags:
 *       - Menu
 *     description: Creates a new menu
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: menu
 *         description: Menu object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Menu'
 *     responses:
 *       201:
 *         description: Successfully created
 */
router.get('/', requireAuth, menuController.list);
router.post('/', requireAuth, menuController.create);
export default router;
