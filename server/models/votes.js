const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const votesSchema = new Schema({
  oneStar: Number,
  twoStar: Number,
  threeStar: Number,
  fourStar: Number,
  fiveStar: Number,
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("Votes", votesSchema);
