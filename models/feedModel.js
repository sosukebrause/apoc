const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  // created_time: { type: String, trim: true, required: true },
  text: { type: String, trim: true, required: true },
  // author: { type: String, required: true },
  location: {
    city: {
      type: String,
    },
    state_name: {
      type: String,
    },
  },
  // location: { type: String, required: false },

  date: {
    type: Date,
    default: Date.now,
  },

  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Must pass userID",
      ref: "User",
    },
  },
});

const Feed = mongoose.model("Feed", FeedSchema);

module.exports = Feed;
