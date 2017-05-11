const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/textlivestream');

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use('/api', require('./routes'));
