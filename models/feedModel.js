const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  created_time: { type: String, trim: true, required: true },
  text: { type: String, trim: true, required: true },
  author: { type: String, required: true },
  location: { type: String, required: true },
});

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
