const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/authentication", require("./jwtAuthentication"));

/*
app.get('/users/:userId', (req, res) => {
  const userId = 1; // req.params.userId;                           // get the userId parameter from the URL or session...
  const userData = JSON.parse(fs.readFileSync('./data.json', 'utf-8')); // read the JSON data from the file
  const user = userData.users.find((u) => u.userId === userId);         // find the user object with the specified ID
  const firstName = user.firstName;                                     // access the firstName property of the user object
  const lastName = user.lastName;
  const email = user.email;
  res.send( {firstName, lastName, email} ); 
});
*/
app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
