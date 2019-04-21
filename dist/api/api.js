'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mealController = require('../../controllers/mealController');

var _mealController2 = _interopRequireDefault(_mealController);

var _demo_mealController = require('../../controllers/demo_mealController');

var _demo_mealController2 = _interopRequireDefault(_demo_mealController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import controllers for contestable year
var router = _express2.default.Router();

//the endpoint for the landing pages
router.get('/', function (req, res) {
    res.render('index');
});

//the end  point for demo landing page
router.get('/demo', function (req, res) {
    res.render('demo');
});

//endpoint to receive meal IDs and sort them according to ingredients
router.post('/api/meals', _mealController2.default.sort_meals);
router.post('/api/demo_meals', _demo_mealController2.default.sort_meals_demo);

//export the routes to index
module.exports = router;