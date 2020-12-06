const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /@/,
    required: true
  },
  age: Number
})

module.exports = mongoose.model("User", userSchema);