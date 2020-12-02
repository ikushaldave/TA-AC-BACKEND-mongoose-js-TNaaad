const express = require("express");
const mongoose = require("mongoose");
const log = require("log-beautify");
const User = require("./models/user");

// Connection with Database

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	log.success(err ?? "Connected with Database");
});

// Express app

const app = express();

// Middleware

app.use(express.json())

// Routing

app.post("/users", (req, res, next) => {
  User.findOne({ "email": req.body.email }, (err, user) => {

    if (err) {
      log.err(err);
    } else if (user) { 
      next("User Already Exist")
    } else {
        User.create(req.body, (err, user, next) => {
          if (err) {
            next("Something Went Wrong on Creating User")
          }
          log.ok("User Created")
          res.json(user);
        });
      }
  });
})

// Getting all users

app.get("/users", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      next("Something went wrong on getting Users")
    }
    res.json({users})
  })
})

// Getting Single user By ID

app.get("/users/:id", (req, res, next) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
        next("User Not Found By Following Id")
    }
    res.json(user)
    });
});

// find() - return a array of object if data found else return null
// findOne() - return a object if data found else null
// findById() - return a object if the passed id data found else null

// Updating a User

app.put("/users/:id", (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
      if (err) {
        next("User Not Found By Following Id");
      }
      res.json(user);
    });
})

// Delete a User

app.delete("/users/:id", (req, res, next) => {
	User.findByIdAndDelete(req.params.id, (err, user) => {
		if (err) {
			next("User Not Found By Following Id");
    }
    log.ok("User Deleted Successful");
		res.send(`User Deleted Successful: ${user}`);
	});
});

// Error

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
  next()
})

app.use((err, req, res, next) => {
  log.error(err);
  res.status(500).send(err)
})

// Listening

app.listen(3000, () => {
  console.log('Server Running on PORT 3000');
})