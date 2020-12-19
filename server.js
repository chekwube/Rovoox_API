var express = require('express');
var app = express();
var morgan = require('morgan');
require('dotenv').config();
var compression = require('compression');
var serverTime = require('./src/api/time.js')
var register = require('./src/api/register.js')
var user_info = require('./src/api/user_info.js')
var game = require('./src/api/game.js')
var leaderboard = require('./src/api/leaderboard.js')
var cors = require('cors');

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/me', user_info);
app.use('/now', serverTime);
app.use('/game', game);
app.use('/register', register);
app.use('/leaderboard', leaderboard);


app.all('*', (req, res) => res.status(404).send({ message: 'Resource not found' }));

module.exports = app;