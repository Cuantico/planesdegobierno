const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  revisionNotes: { type: String, required: true },
  date: { type: Date, default: Date.now },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("History", historySchema);
