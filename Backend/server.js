const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: false }));

const { pool } = require("./dbConfig")
const dotenv = require("dotenv")
dotenv.config();

const port = 3003;

app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/api", function (req, res) {
  res.json({message: "Hello from server!"});
});

app.get("/dummy", function(req, res) {
  res.sendFile(__dirname + "/dummy.html")
})

app.post("/dummy", async (req, res) => {
  let {email, password, firstname, lastname} = req.body;
  pool.query(
    `INSERT INTO student(email, password, first_name, last_name) 
     values($1, $2, $3, $4)`, [email, password, firstname, lastname], 
    (err, results) =>{
      console.log(email, password,firstname,lastname)
      if(err){
       console.log()
      }
      else{
        console.log(results.rows)
      }
    } 
    
    )
})

app.get("/test", (req, res) => {
  res.json({ message: "Button pushed!" });
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

app.use(express.json());