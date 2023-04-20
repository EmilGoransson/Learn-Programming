const wiki = require("./wiki.js");
const express = require("express");
const app = express();
const port = 3003;

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/api", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.use("/wiki", wiki);