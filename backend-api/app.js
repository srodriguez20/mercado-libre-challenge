const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');

// Rutas a utilizar en la aplicación.
const productsRouter = require('./routes/products');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Allow CORS all origins
app.use(cors());

// Declaración de rutas
app.use('/api/items', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    error: err,
  });
});

module.exports = app;
