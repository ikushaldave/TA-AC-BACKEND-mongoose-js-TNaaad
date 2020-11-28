const express = require("express")
const mongoose = require("mongoose")

// Connection with MongoDB Database

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err ?? "Connected With Database");
});

const app = express();

// listening

app.listen(3000, () => {
  console.log("Server is Running on PORT 3000");
})