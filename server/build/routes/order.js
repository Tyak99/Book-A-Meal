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

router.get('/caterer/:id', requireAuth, _order.default.allOrders);
router.post('/', requireAuth, _order.default.create);
router.put('/:id', requireAuth, _order.default.editOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=order.js.map