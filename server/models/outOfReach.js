const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outOfReachSchema = new Schema({
  description: { type: String, required: true },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("OutOfReach", outOfReachSchema);
