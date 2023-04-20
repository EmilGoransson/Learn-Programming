const express = require("express");
const cors = require('cors');
const app = express();
const port = 3003;

app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/api", function (req, res) {
  res.json({message: "Hello from server!"});
});

app.get("/test", (req, res) => {
  res.json({ message: "Button pushed!" });
});

app.listen(port, function () {
  console.log("App listening on port ${port}!");
});

app.use(express.json());