const express = require('express');
const Message = require('../models/message');
const wss = require('../websocket');

const router = express.Router({ mergeParams: true });

router.route('/')
  .post((req, res) => {
    const message = new Message({
      streamId: req.params.stream_id,
      text: req.body.text,
    });

    message.save((err) => {
      if (err) res.send(err);

      res.json({ message: 'Message created!' });
    });

    wss.broadcast({
      type: 'newMessage',
      payload: {
        streamId: req.params.stream_id,
        text: req.body.text,
        postDate: message.postDate,
      },
    });
  })
  .get((req, res) => {
    Message.find({ streamId: req.params.stream_id }, (err, messages) => {
      if (err) throw err;

      res.json(messages);
    });
  });

router.route('/:message_id')
  .get((req, res) => {
    Message.findById(req.params.message_id, (err, message) => {
      if (err) res.send(err);

      res.json(message);
    });
  })
  .put((req, res) => {
    Message.findById(req.params.message_id, (err, message) => {
      if (err) res.send(err);

      message.text = req.body.text ? req.body.text : message.text;

      message.save((err) => {
        if (err) res.send(err);

        res.json({ message: 'Message updated!' });
      });
    });
  })
  .delete((req, res) => {
    Message.remove({
      _id: req.params.message_id,
    }, (err) => {
      if (err) res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
