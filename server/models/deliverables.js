const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverablesSchema = new Schema({
  description: { type: String, required: true },
  projectid: { type: String, required: true }
});

module.exports = mongoose.model("Deliverables", deliverablesSchema);
