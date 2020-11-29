const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	email: {
		type: String,
		match: /@/,
	},
	password: {
		type: String,
		minlength: 5,
		maxlength: 15,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("User", userSchema)