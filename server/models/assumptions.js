const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assumptionsSchema = new Schema({
  description: { type: String, required: true },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("Assumptions", assumptionsSchema);
