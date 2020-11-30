const mongoose = require("mongoose");

const { Schema } = mongoose;

const addressSchema = new Schema({
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  village: String,
  pin: Number,
  user: Schema.Types.ObjectId
}, {timestamps: true});

module.exports = mongoose.model("Address", addressSchema)