const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const effortSchema = new Schema({
  task: { type: String, required: true },
  hours: { type: Number, requiered: true },
  cost: { type: Number, requiered: true },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("Effort", effortSchema);
