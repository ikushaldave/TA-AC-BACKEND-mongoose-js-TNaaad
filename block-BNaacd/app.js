const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err ?? "MongoDB database Connected");
});

// Express app

const app = express()

// Listening

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
})