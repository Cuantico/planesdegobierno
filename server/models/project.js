const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  definition: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  summary: { type: String, required: true },
  overview: { type: String, required: true },
  approach: { type: String, required: true }
});

module.exports = mongoose.model("Project", projectSchema);
