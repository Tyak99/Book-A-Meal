"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Role = _models.default.Role;

var router = _express.default.Router();

router.post('/', function (req, res) {
  Role.create({
    name: req.body.name
  }).then(function (role) {
    res.send({
      status: 201,
      data: role
    });
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=role.js.map