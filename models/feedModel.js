const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  userId: { type: String, required: true },
});

const Feed = mongoose.model("Feed", feedSchema);

module.exports = Feed;
