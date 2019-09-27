const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stakeholdersSchema = new Schema({
  area: { type: String, required: true },
  description: { type: String, required: true },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("Stakeholders", stakeholdersSchema);
