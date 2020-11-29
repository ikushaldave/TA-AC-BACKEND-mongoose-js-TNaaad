const express = require("express");
const mongoose = require("mongoose")

// Connection with DB

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err ?? "Connected to Database");
});

// Express App

const app = express()

// Listening

app.listen(3000, () => {
  console.log('Server is running on PORT 3000');
})