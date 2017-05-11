const express = require('express');
const Stream = require('../models/stream');

const router = express.Router();

router.route('/')
  .post((req, res) => {
    const stream = new Stream({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
    });

    stream.save((err) => {
      if (err) res.send(err);

      res.json({ message: 'Stream created!' });
    });
  })
  .get((req, res) => {
    Stream.find((err, streams) => {
      if (err) throw err;

      res.json(streams);
    });
  });

router.route('/:stream_id')
  .get((req, res) => {
    Stream.findById(req.params.stream_id, (err, stream) => {
      if (err) res.send(err);

      res.json(stream);
    });
  })
  .put((req, res) => {
    Stream.findById(req.params.stream_id, (err, stream) => {
      if (err) res.send(err);

      stream.title = req.body.title ? req.body.title : stream.title;
      stream.description = req.body.description ? req.body.description : stream.description;
      stream.startDate = req.body.startDate ? req.body.startDate : stream.startDate;

      stream.save((err) => {
        if (err) res.send(err);

        res.json({ message: 'Stream updated!' });
      });
    });
  })
  .delete((req, res) => {
    Stream.remove({
      _id: req.params.stream_id,
    }, (err) => {
      if (err) { res.send(err); }

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
