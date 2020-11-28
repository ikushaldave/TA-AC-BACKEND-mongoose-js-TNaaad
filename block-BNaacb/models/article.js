const { Schema } = require("mongoose");

const articleSchema = new Schema({
  "title": String,
  "description": String,
  "author": {
    "name": String,
    "email": String,
    "facebookURL": String,
    "twitterURL": String
  },
  "tags": [String],
})
