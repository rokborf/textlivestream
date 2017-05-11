const express = require('express');
const streamRouter = require('./stream');
const messageRouter = require('./message');

const router = express.Router();
router.use('/streams', streamRouter);
router.use('/streams/:stream_id/messages', messageRouter);

module.exports = router;
