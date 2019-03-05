"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _authController = _interopRequireDefault(require("../controllers/authController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var requireSignIn = _passport.default.authenticate('local', {
  session: false
});
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


router.post('/signup', _authController.default.create);
router.post('/login', requireSignIn, _authController.default.login);
var _default = router;
exports.default = _default;
//# sourceMappingURL=auth.js.map