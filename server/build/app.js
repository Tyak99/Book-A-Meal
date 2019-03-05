"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _meal = _interopRequireDefault(require("./routes/meal"));

var _order = _interopRequireDefault(require("./routes/order"));

var _menu = _interopRequireDefault(require("./routes/menu"));

var _role = _interopRequireDefault(require("./routes/role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerJSDoc = require('swagger-jsdoc');

require('dotenv').config(); // routes


var app = (0, _express.default)(); // -- setup up swagger-jsdoc --

var swaggerDefinition = {
  info: {
    title: 'Book a meal',
    version: '1.0.0',
    description: 'All things meal'
  },
  host: 'https://protected-waters-12782.herokuapp.com',
  basePath: '/'
}; // options for the swagger docs

var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./server/routes/*.js']
};
var swaggerSpec = swaggerJSDoc(options);
app.get('/docs', function (req, res) {
  res.sendFile(_path.default.join(__dirname, 'redoc.html'));
});
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use('/api/v1/auth', _auth.default);
app.use('/api/v1/meal', _meal.default);
app.use('/api/v1/order', _order.default);
app.use('/api/v1/menu', _menu.default);
app.use('/api/v1/role', _role.default);
app.get('/', function (req, res) {
  res.send('<h1> Welcome to book a meal </h1>');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('server started');
});
module.exports = app;
//# sourceMappingURL=app.js.map