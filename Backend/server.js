const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: false }));
const port = 3003;

//middleware
app.use(cors());
app.use(express.json());


//routes
//app.use("/authentication", require("./jwtAuthentication"));
app.use("/dashboard", require("./dashboard"));


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
  console.log(`App listening on port ${port}!`);
});
