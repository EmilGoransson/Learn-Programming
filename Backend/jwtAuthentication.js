const express = require("express");
const router = express.Router();
const pool = require("./dbConfig");
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");
const authorization = require("./middleware/authorization");
//register route
router.post("/Signup", async (req, res) => {
  try {
    //1. destructure req.body (first_name, last_name, email, password)
    const { email, firstName, lastName, password } = req.body;
    //2. check if user exists
    //this is a temporary psql query that will be found in queries.js later on
    const user = await pool.query("SELECT * FROM student WHERE email = $1", [
      email,
    ]);
    if (user.rows.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    //3. if user not exists -> encrypt password
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    //4. insert user into DB
    //This is a temporary psql query that will be in queries.js later on
    let new_user = await pool.query(
      "INSERT INTO student(first_name, last_name, email, password) VALUES($1,$2,$3,$4)",
      [firstName, lastName, email, encryptedPassword]
    );
    console.log("User Created: " + firstName + " " + lastName);
    //5. generate JWT token
    const token = jwtGenerator(new_user.rows[0]);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await pool.query("SELECT * FROM student WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).send("Incorrect Email or Password");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).send("Incorrect Email or Password");
    }

    const cLevel = await pool.query(
      "SELECT s_id, current_level, first_name, last_name from student where email = $1",
      [email]
    );
    currentLevel = cLevel.rows[0].current_level;
    firstName = cLevel.rows[0].first_name;
    lastName = cLevel.rows[0].last_name;
    id = cLevel.rows[0].s_id;

    const token = jwtGenerator(Number(id), firstName, lastName, currentLevel);


    res.json({ token, currentLevel, firstName, lastName, id });
    console.log(
      "User: " +
        firstName +
        " " +
        lastName +
        "\nid: " +
        id +
        " logged in successfully\n"
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


router.get("/remove", authorization, async (req, res) => {
  try{
    const  id  = req.headers.id;
    console.log(req.headers.id);
    console.log("Preparing to remove account: " + id);
    // if ID is not null and not undefined -> Remove account
    if(id != null && id != undefined){
      const remove = pool.query("DELETE FROM student WHERE s_id = $1", [id]);
      console.log("Account " + id + " was removed");
      res.status(200).send("Your accont was removed");
    }
    // Else no account with given ID
    else{
      if(id === null){
        console.log("Cannot remove account - ID is null")
      }
      else{
        console.log("Cannot remove account - ID is undefined")
      }
      res.status(400).send("No account with that ID");
    }
  }catch(error){
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/edit", authorization, async (req, res) => {
  try{
    const id = Number(req.headers.id);
    let { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log("\nPreparing credential update for user: " + id + "\n")
    const old = await pool.query(
      "SELECT first_name, last_name, email, current_level FROM student where s_id = $1", [id]
    );
    //Update DB with new account credientials 
    await pool.query(
      "UPDATE student SET email = $1, password = $2, first_name = $3, last_name = $4 WHERE s_id = $5;",
      [email, encryptedPassword, firstName, lastName, id]
      );
      console.log("\nUpdated user: " + id + "\n"+ old.rows[0].first_name +  " --> " + firstName +"\n" + old.rows[0].last_name + " --> " + lastName + "\n" + old.rows[0].email +  " --> " + email + "\n")
      
      const token = jwtGenerator(id, firstName, lastName, old.rows[0].current_level);
      console.log("Updated user new token: " + token);
      res.json({ token })
    }catch(error){
      console.error(error);
      res.status(500).send("Server Error");
    }

});
//verify token
router.get("/verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
