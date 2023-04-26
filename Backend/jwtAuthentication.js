const express = require('express');
const router = express.Router();
const pool = require("./dbConfig");
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");
const authorization = require("./middleware/authorization")

//register route
router.post("/Signup", async (req,res) => {
    try{
        //1. destructure req.body (first_name, last_name, email, password)
            const {email, firstName, lastName, password} = req.body;
            //2. check if user exists
            //this is a temporary psql query that will be found in queries.js later on
            const user =  await pool.query("SELECT * FROM student WHERE email = $1", [email]);
            if(user.rows.length > 0){
                return res.status(401).send("User already exists");
            }
            
        //3. if user not exists -> encrypt password
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);
            console.log(encryptedPassword);
        //4. insert user into DB
            //This is a temporary psql query that will be in queries.js later on
            let new_user = await pool.query("INSERT INTO student(first_name, last_name, email, password) VALUES($1,$2,$3,$4)", 
            [firstName, lastName, email, encryptedPassword]);

        //5. generate JWT token
        const token = jwtGenerator(user.rows[2]);
        res.json({token})
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


//login route
router.post("/login", async (req,res) =>{
    console.log("/login")
    try{
        let {email, password} = req.body;
        console.log(email, password)
        const user = await pool.query("SELECT * FROM student WHERE email = $1", [email]);
        if(user.rows.length === 0){
            return res.status(401).send("Incorrect Email or Password");
        }
        console.log(user.rows)
        //const validPassword = await bcrypt.compare(password, user.rows[0].password);
        //console.log(validPassword);

       // if(!validPassword){
        //    return res.status(401).send("Incorrect Email or Password");
      //  }
        const token = jwtGenerator(user.rows[2]);
        res.json({ token });
        console.log(token);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.get("/verify", authorization, async (req,res) =>{
    try{
        res.json(true)
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;