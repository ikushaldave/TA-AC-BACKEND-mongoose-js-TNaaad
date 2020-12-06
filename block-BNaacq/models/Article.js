const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: { type: String, required: true },
  tags: [String],
  likes: Number,
  author: Schema.Types.ObjectId,
  comments: [String],
}, {timestamps: true})

module.exports = mongoose.model("Article", articleSchema);
