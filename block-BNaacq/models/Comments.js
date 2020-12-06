const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
	{
    content: {
      type: String,
      min: 10
    },
    author: mongoose.Schema.Types.ObjectId,
    article: mongoose.SchemaType.Types.ObjectId
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
