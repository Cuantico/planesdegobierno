const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  role: { type: String, required: true },
  responsible: { type: String, required: true },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("Team", teamSchema);
