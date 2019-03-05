"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _passport2 = _interopRequireDefault(require("../services/passport"));

var _order = _interopRequireDefault(require("../controllers/order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.default)();

var requireAuth = _passport.default.authenticate('jwt', {
  session: false
});
/**
 * @swagger
 * definitions:
 *   Order:
 *     properties:
 *       price:
 *         type: integer
 *       order_status:
 *         type: string
 *       delivery_address:
 *         type: string
 *       meals:
 *         type: array
 *       userId:
 *         type: integer
 *       catererId:
 *         type: integer
 */

/**
 * @swagger
 * /api/v1/order/caterer/{id}:
 *   get:
 *     summary: List all the orders by caterer id
 *     description: Returns a list of all order a caterer recieved
 *     tags:
 *       - Order
 *     parameters:
 *       - name: id
 *         description: Caterer's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: An array of orders
 *         schema:
 *           $ref: '#/definitions/Order'
 */

/**
 * @swagger
 * /api/v1/order:
 *   post:
 *     tags:
 *       - Order
 *     description: Post a new order
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Order
 *         description: Order object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Order'
 *     responses:
 *       201:
 *         description: Successfully created
 */

/**
 * @swagger
 * /api/v1/order/{id}:
 *   put:
 *     tags:
 *       - Order
 *     description: Updates a single order
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Order
 *         description: Order field to be updated
 *         in: body
 *         schema:
 *            $ref: '#/definitions/Order'
 *     responses:
 *       200:
 *         description: Successfully updated successfully
 *       400:
 *         description: 'No order with that id found'
 */


router.get('/caterer/:id', requireAuth, _order.default.allOrders);
router.post('/', requireAuth, _order.default.create);
router.put('/:id', requireAuth, _order.default.editOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=order.js.map