const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("User", articleSchema);
