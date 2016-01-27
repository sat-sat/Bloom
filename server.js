'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel/register');

const config = require('./config/config');
const mongoose = require('./config/mongoose');
const express = require('./config/express');
var passport = require('./config/passport');

const db = mongoose();
const app = express();
var passport = passport();

app.listen(config.port);
console.log('Server running at http://localhost:3000/');

module.exports = app;