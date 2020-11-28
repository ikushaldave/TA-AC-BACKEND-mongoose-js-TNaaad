const express = require("express");
const mongoose = require("mongoose");

// MongoDb Connection

mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  console.log(err ?? "Connected to MongoDB database");
});

// Express App

const app = express()

// Listening

app.listen(3000, () => {
  console.log("Server Running at PORT 3000");
})