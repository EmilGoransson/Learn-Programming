const express = require("express");
const router = express.Router();
const app = express()
const pool = require("./dbConfig");
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");
const authorization = require("./middleware/authorization");
const { Client } = require('pg');
const {join} = require("path");
const path = require("path");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


client.connect();


//register route
router.post("/Signup", async (req, res) => {
  try {
    //1. destructure req.body (first_name, last_name, email, password)
    const { email, firstName, lastName, password } = req.body;
    //2. check if user exists
    //this is a temporary psql query that will be found in queries.js later on
    const user = await client.query("SELECT * FROM student WHERE email = $1", [
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
    let new_user = await client.query(
      "INSERT INTO student(first_name, last_name, email, password) VALUES($1,$2,$3,$4)",
      [firstName, lastName, email, encryptedPassword]
    );

    const added_user = await client.query("SELECT * FROM student WHERE email = $1", [email])
    console.log("User Created: " + firstName + " " + lastName);
    console.log(added_user.rows[0]);
    //5. generate JWT token
    const token = jwtGenerator(added_user.rows[0].s_id, added_user.rows[0].first_name, added_user.rows[0].last_name, added_user.rows[0].current_level, added_user.rows[0].email, added_user.rows[0].profilePicture);
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
    const user = await client.query("SELECT * FROM student WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).send("Incorrect Email or Password");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).send("Incorrect Email or Password");
    }

    const cLevel = await client.query(
      "SELECT s_id, current_level, first_name, last_name, email, profile_picture, pinned_items from student where email = $1",
      [email]
    );
    console.log(cLevel.rows[0])
    currentLevel = cLevel.rows[0].current_level;
    firstName = cLevel.rows[0].first_name;
    lastName = cLevel.rows[0].last_name;
    id = cLevel.rows[0].s_id;
    email = cLevel.rows[0].email
    profilePicture = cLevel.rows[0].profile_picture
    pinnedItems = cLevel.rows[0].pinned_items
    const token = jwtGenerator(Number(id), firstName, lastName, currentLevel, email, profilePicture);

    res.json({ token, currentLevel, firstName, lastName, id, pinnedItems });
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


router.get("/getInfo", authorization, async(req,res) =>{
  const id = req.headers.id;
try{
  const info = await client.query("SELECT first_name, last_name, email, current_level, profile_picture, pinned_items FROM student WHERE s_id = $1", [id]);
  const firstName = info.rows[0].first_name;
  const lastName = info.rows[0].last_name;
  const currentLevel = info.rows[0].current_level;
  const email = info.rows[0].email;
  const profilePicture = info.rows[0].profile_picture;
  var pinnedItems = info.rows[0].pinned_items
  console.log("Sending information about user: " + id + "\n");
  if(pinnedItems != null && pinnedItems != undefined){
    res.status(200).json( {firstName, lastName, currentLevel, email, profilePicture, pinnedItems} )
  }
  else{
    pinnedItems = [];
    res.status(200).json( {firstName, lastName, currentLevel, email, profilePicture, pinnedItems} )
  }
}
catch(error){
  res.status(500).send("Server Error")
  console.log(error)
}
})

router.get("/levelUp", authorization, async(req, res) =>{
  const id = req.headers.id;
  console.log("User " + id +" is about to level up\n");
  try{
    const level= await client.query("UPDATE student SET current_level = current_level + 1 WHERE s_id = $1", [id]);

    // GENERATE NEW TOKEN FOR LEVEL
    const info = await client.query("SELECT first_name, last_name, email, current_level, profile_picture FROM student WHERE s_id = $1", [id])

    console.log("User info from /levelUp ");
    console.log(info.rows[0])
    console.log("\n")
    const firstName = info.rows[0].first_name;
    const lastName = info.rows[0].last_name;
    const currentLevel = info.rows[0].current_level;
    const email = info.rows[0].email 
    const profilePicture = info.rows[0].profile_picture
    console.log("\n" + firstName + " " + lastName + " is now level " + currentLevel);
    token = jwtGenerator(id, firstName, lastName, currentLevel, email, profilePicture);
    if(req.headers.token === token){
      console.log("Failed to generate new token\n")
    }
    else{
      console.log("Successfully generated new token\n")
    }
    res.status(200).send(token);
  }catch(error){
    res.status(500);
    console.log(error)
  }
})

router.get("/remove", authorization, async (req, res) => {
  try{
    const  id  = req.headers.id;
    console.log("Preparing to remove account: " + id);
    // if ID is not null and not undefined -> Remove account
    if(id != null && id != undefined){
      const remove = client.query("DELETE FROM student WHERE s_id = $1", [id]);
      console.log("Account " + id + " was removed");
      res.status(200).send("Your accont was removed");
    }
    // Else no account with given ID
    else{
      if(id === null){
        console.log("\nCannot remove account - ID is null")
      }
      else{
        console.log("Cannot remove account - ID is undefined\n")
      }
      res.status(400).send("No account with that ID");
    }
  }catch(error){
    console.error(error);
    res.status(500).send("Server Error");
  }
});


router.get("/editProfilePicture", authorization, async(req, res) =>{
  const id = req.headers.id;
  const new_pic = req.headers.new_pic;
  try{
    const query = await client.query("UPDATE student SET profile_picture = $1 WHERE s_id = $2", [new_pic, id])
  
    res.status(200).send("You have a new cool profile picture")
  }catch(error){
    res.status(500);
    console.log(error)
  }


})



router.post("/edit", authorization, async (req, res) => {
  try{
    const id = Number(req.headers.id);
    let { firstName, lastName, email, password } = req.body;

    const existing_user = await client.query("SELECT email from student where email = $1", [email])
    if(existing_user.rows.length > 0){
      console.log("\nUser " + id + " attempted to change their email to an already existing one")
      console.log("Change of credentials refused\n")
      return res.status(403).send("An account with that email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log("\nPreparing credential update for user: " + id + "\n")
    const old = await client.query(
      "SELECT first_name, last_name, email, current_level FROM student where s_id = $1", [id]
    );
    //Update DB with new account credientials 
    await client.query(
      "UPDATE student SET email = $1, password = $2, first_name = $3, last_name = $4 WHERE s_id = $5;",
      [email, encryptedPassword, firstName, lastName, id]
      );
      console.log("\nUpdated user: " + id + "\n"+ old.rows[0].first_name +  " --> " + firstName +"\n" + old.rows[0].last_name + " --> " + lastName + "\n" + old.rows[0].email +  " --> " + email + "\n")
      
      const token = jwtGenerator(id, firstName, lastName, old.rows[0].current_level);
      console.log("\nUpdated user new token: " + token + " \n");
      res.json({ token })
    }catch(error){
      console.error(error);
      res.status(500).send("Server Error");
    }

});

router.post("/pinnedItems", authorization, async (req,res) =>{
    const id = req.headers.id
    let newPinned = req.body.newPinned;
  try{
    
    const pinnedItems = await client.query("UPDATE student SET pinned_items = array_append(pinned_items, $1) WHERE s_id = $2", [newPinned, id])
    console.log("\nUser " + id + " has pinned " + newPinned);
    res.status(200).send("Pinned items");
  }
  catch(error){
    console.log(error)
    res.status(500)
  }
})

router.post("/removePinnedItems", authorization, async(req, res) =>{

  const id = req.headers.id;
  let removePin = req.body.removePinned;
  try{
    const removeItem = await client.query("UPDATE student SET pinned_items = array_remove(pinned_items, $1) WHERE s_id = $2", [removePin, id])
    console.log("\nUser " + id + " has removed pinned item " + removePin);
    res.status(200).send("Unpinned item")
  }
  catch(error){
    console.log(error)
    res.status(500);
  }
 
})


//verify token
router.get("/verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./build/index.html"));
  });
}




module.exports = router;