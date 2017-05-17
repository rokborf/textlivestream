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


/*
function sendAll(stream, message) {
  for (let i = 0; i < clients.length; i++) {
    if (~clients[i].streams.indexOf(stream)) {
      clients[i].ws.send({
        type: 'newMessage',
        payload: {
          text: message,
        },
      });
    }
  }
}
*/

/*
{
  type: connectToStream, newMessage,
  payload: {}
}
*/


app.use('/api', require('./routes'));

