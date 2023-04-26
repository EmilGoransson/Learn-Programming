const express = require("express");
const cors = require('cors');
const app = express();
const port = 3003;
const fs = require('fs');

app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get('/mypage', (req, res) => {
  const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
  res.send(jsonData);
});

app.get('/users/:userId', (req, res) => {
  const userId = 1;/*req.params.userId;*/                               // get the userId parameter from the URL or session...
  const userData = JSON.parse(fs.readFileSync('./data.json', 'utf-8')); // read the JSON data from the file
  const user = userData.users.find((u) => u.userId === userId);         // find the user object with the specified ID
  const firstName = user.firstName;                                     // access the firstName property of the user object
  const lastName = user.lastName;
  const email = user.email;
  res.send( {firstName, lastName, email} ); 
});

app.get("/api", function (req, res) {
  res.json({message: "Hello from server!"});
});

app.get("/test", (req, res) => {
  res.json({ message: "Button pushed!" });
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

app.use(express.json());