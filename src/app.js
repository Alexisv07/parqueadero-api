const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const registros = require('./modulos/registros/rutas');
const error = require('./middleware/error');
const error1 = require('./red/errors');
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuración
app.set('port', config.app.port)

//rutas
app.use('/api/registros', registros)
app.use(error1);
module.exports = app;