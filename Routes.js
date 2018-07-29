var Express         = require("express");
var Routes          = Express.Router();
var BookRoute    = require('./BookRoutes');

Routes.use('/book/', BookRoute);

module.exports = Routes;