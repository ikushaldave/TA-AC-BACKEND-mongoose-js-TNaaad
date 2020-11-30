const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true
  },
  age: Number,
  password: {
    type: String,
    minlength: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  favorites: [String]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
