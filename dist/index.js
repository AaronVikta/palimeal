'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _api = require('./api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//setup the application


//import cors for crosssite origin requests
//import express since this is an express application
var app = (0, _express2.default)();

//import morgan, to kown my request sourses


//import body-parser for the forms

app.set('view engine', 'ejs');
app.use((0, _morgan2.default)('combined'));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)({ credentials: true, origin: 'http://locahost:3000' }));

//server static files
app.use(_express2.default.static('public'));

//import routes 

app.use(_api2.default);

//server the application
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log('Application running and listening to port ' + PORT);
});