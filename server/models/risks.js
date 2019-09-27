const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const risksSchema = new Schema({
  risk: { type: String, required: true },
  level: { type: String, required: true },
  contingencyPlan: { type: String, required: true },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("Risks", risksSchema);
