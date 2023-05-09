const express = require("express");
const app = express();
const path      = require('path');
const cors = require("cors");
const { Client } = require('pg');
const port = process.env.PORT || 3003; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.static('build')); // serve static files (css & js) from the 'public' directory

if(process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });
}

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
