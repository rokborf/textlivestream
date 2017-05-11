const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  id: Schema.Types.ObjectId,
  streamId: { type: String, required: true },
  text: { type: String, required: true },
  postDate: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
