import express from 'express';
import passport from 'passport';
import authController from '../controllers/authController';

const router = express.Router();

const requireSignIn = passport.authenticate('local', { session: false });

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: integer
 *       email:
 *         type: integer
 *       password:
 *         type: integer
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     tags:
 *       - Sign up
 *     description: Register an account
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authentication
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Successfully created
 *       token: string
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags:
 *       - Sign in
 *     description: Sign in an account
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authentication
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *                type: string
 *             password:
 *                type: string
 *     responses:
 *       201:
 *         description: Successfully created
 */



router.post('/signup', authController.create);
router.post('/login', requireSignIn, authController.login);

export default router;
