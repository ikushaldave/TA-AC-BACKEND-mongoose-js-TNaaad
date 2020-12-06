const express = require("express");
const mongoose = require("mongoose");
const log = require("log-beautify");

// Connection with DB

mongoose.connect("mongodb://localhost:27017/blog", (err) => {
  (err) ? log.error(err) : log.ok("Connected to Database")
})

// Express app

const app = express();

// Middleware

app.use(express.json())

// Routes

// Error

app.use((req, res, next) => {
  res.send("Page Not Found");
  next()
})

app.use((err, req, res, next) => {
  log.error(err)
  res.send(err)
  next()
})

// Server Running

app.listen(3000, () => {
  log.info("Sever Running on PORT 3000")
})