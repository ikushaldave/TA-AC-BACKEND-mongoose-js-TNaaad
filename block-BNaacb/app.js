const express = require("express");
const mongoose = require("mongoose");

// Connection with Database

mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err ?? "Connected to Mongodb Database");
});

// Express App

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Server Listener

app.listen(3000, () => {
  console.log("Server Running on PORT 3000");
})