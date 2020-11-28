const express = require("express");
const mongoose = require("mongoose")

// Connection with Database

mongoose.connect("mongodb://localhost:27017/blog", (err) => {
  console.log(err ?? "Connected with MongoDB Database");
})

// Express app

const app = express();

// Listening

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
})