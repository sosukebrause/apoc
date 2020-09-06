const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aqSchema = new Schema({
  aqi: { type: String, required: true },
  idx: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const AQ = mongoose.model("AQ", aqSchema);

module.exports = AQ;
