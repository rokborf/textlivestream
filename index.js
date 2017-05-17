const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/textlivestream');

app.listen(8888, () => {
  console.log('Example app listening on port 8888!');
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.use('/api', require('./routes'));

