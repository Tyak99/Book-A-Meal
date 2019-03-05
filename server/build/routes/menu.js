"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _menu = _interopRequireDefault(require("../controllers/menu"));

var _passport2 = _interopRequireDefault(require("../services/passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.default)();

var requireAuth = _passport.default.authenticate('jwt', {
  session: false
});
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


router.get('/', requireAuth, _menu.default.list);
router.post('/', requireAuth, _menu.default.create);
var _default = router;
exports.default = _default;
//# sourceMappingURL=menu.js.map