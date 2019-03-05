"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _meal = _interopRequireDefault(require("../controllers/meal"));

var _passport2 = _interopRequireDefault(require("../services/passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var requireAuth = _passport.default.authenticate('jwt', {
  session: false
});
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


router.post('/', requireAuth, _meal.default.create);
router.get('/caterer/:id', requireAuth, _meal.default.list);
router.put('/:id', requireAuth, _meal.default.editMeal);
router.delete('/:id', requireAuth, _meal.default.delete);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meal.js.map