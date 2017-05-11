const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StreamSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: String,
  startDate: Date,
});

const Stream = mongoose.model('Stream', StreamSchema);

module.exports = Stream;
