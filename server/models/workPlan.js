const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workPlanSchema = new Schema({
  description: { type: String, required: true },
  days: { type: Number, requiered: true },
  deliverablesid: { type: String },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("WorkPlan", workPlanSchema);
