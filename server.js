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


//routes
app.use("/authentication", require("./jwtAuthentication"));

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
