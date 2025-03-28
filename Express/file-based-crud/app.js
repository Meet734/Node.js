var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var itemRoutes = require('./routes/itemRoutes');
var publicRoutes = require('./routes/publicRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/data', itemRoutes);
app.use('/public', publicRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use('*', (req, res, next) => {
  const err = new Error(404, 'fail', 'undefined route');
  next(err, req, res, next);
});

// error handler
app.use(globalErrHandler);


module.exports = app;
