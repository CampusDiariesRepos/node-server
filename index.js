const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const hbs = require('hbs');
// Database configurations
const {mongoose} = require('./config/mongoose');
// The framework
var app = express();
// Allow Cross Origin Access Requests
app.use(cors());
// Http request logger middleware
app.use(require('morgan')('dev'));
// Templating web pages 
app.set('view engine','hbs');
// Extract data from request urls and request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Location to store static files
app.use(express.static(__dirname + '/public'));
// Models in use
require('./models/User');
// Routes in use
app.use(require('./routes'));
// When an invalid route is requested for, throw an error
app.use(function(req, res, next) {
    var err = new Error('Requested url not found');
    err.status = 404;
    next(err);
});
// Hide the stack trace of error message
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors' : { message: err.message, error: err}});
});
// Bring the server to Life
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening on port ' + server.address().port);
});

