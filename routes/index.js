const streamRouter = require('./stream');
const messageRouter = require('./message');

streamRouter.use('/streams/:stream_id/messages', messageRouter);

module.exports = streamRouter;
