"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _menu = _interopRequireDefault(require("../controllers/menu"));

var _passport = _interopRequireDefault(require("../services/passport"));

var _passport2 = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.default)();

var requireAuth = _passport2.default.authenticate('jwt', {
  session: false
});

router.get('/', requireAuth, _menu.default.list);
router.post('/', requireAuth, _menu.default.create);
var _default = router;
exports.default = _default;
//# sourceMappingURL=menu.js.map