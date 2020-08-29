const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  userId: { type: String, required: true },
});

const Feed = mongoose.model("Feed", todoSchema);

module.exports = Feed;
