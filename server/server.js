var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/beerbuddy');
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(3000);


module.exports = app;
