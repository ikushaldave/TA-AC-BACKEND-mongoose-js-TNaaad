writeCode

#### Perform users CRUD operation using mongoose from an express application

- create an express application named sample
- connect to mongodb database using mongoose.connect() in `app.js`
- create a user schema in models directory
  - name
  - email
  - sports
- create user model based on schema
- export it from model
- import it into app.js
- on POST request on `/users` route create a user

Q. Insert a user into database using Model.create() OR model.save() function

- insert user `{name: '', email: '', sports: ['cricket', 'khokho']}`
- check into your local mongo database for inserted data

Q. Query all the users from the database

- use Model.find

Q. query a single document(user) using mongoose

- on GET request on '/users/:id' route, fetch a user
- use Model.find({\_id: 'some-id'}) // use \_id of inserted document in database
- use Model.findOne({\_id: 'some-id'})
- use Model.findById(id)

Mention the difference between them in comments, if any ?

Q. Update a user

- on PUT request on '/users/:id', update a user
- use Model.update
- use Model.updateOne
- use Model.findByIdAndUpdate(id)

Q. delete a user using Model.findByIdAndDelete()

- on DELETE request on '/users/:id'

For example:-

```js
// import User model at top
const User = require("./models/user");

// delete route for deleting a user using id
app.delete("/users", (req, res) => {
  var userId = "some id from database";
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.send("user deleted");
  });
});
```

Similarily, handle all above routes taking help from delete route.
