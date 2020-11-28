const { Schema } = require("mongoose");

const userSchema = new Schema({
  "name": String,
  "email": { type: String, lowercase: true},
  "age": {type: Number, default: 0}
})