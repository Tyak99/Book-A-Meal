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

router.post('/', requireAuth, _meal.default.create);
router.get('/caterer/:id', requireAuth, _meal.default.list);
router.put('/:id', requireAuth, _meal.default.editMeal);
router.delete('/:id', requireAuth, _meal.default.delete);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meal.js.map