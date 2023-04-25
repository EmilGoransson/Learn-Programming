const router = require("express").Router
const pool = require("./dbConfig");
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");
const authorization = require("./middleware/authorization")

//register route
router.post("/auth/register", async (req,res) => {
    try{
        //1. destructure req.body (first_name, last_name, email, password)
        console.log("gets here 1")
            const {first_name, email, last_name, password} = req.body;
        console.log("gets here 2")
            //2. check if user exists

            //this is a temporary psql query that will be found in queries.js later on
            const user = pool.query("SELECT * FROM student WHERE email = $1", [email]);
            if(user.rows.length > 0){
                return res.status(401).send("User already exists");
            }
            
        //3. if user not exists -> encrypt password
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const encryptedPassword = bcrypt.hash(password, salt);

        //4. insert user into DB
            //This is a temporary psql query that will be in queries.js later on
            pool.query("INSERT INTO student(first_name, last_name, email, password) VALUES($1,$2,$3,$4)", 
            [first_name, last_name, email, encryptedPassword]);

        //5. generate JWT token
        const token = jwtGenerator(new_user.rows[0].user_id);
        res.json({token})
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


//login route
router.post("/auth/login", async (req,res) =>{
    try{
        let {email, password} = req.body;
        const login = await pool.query("SELECT email FROM student WHERE email = $1", [email]);
        if(login.rows.length === 0){
            return res.status(401).send("Incorrect Email or Password");
        }
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        console.log(validPassword);

        if(!validPassword){
            return res.status(401).send("Incorrect Email or Password");
        }
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({ token });
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.get("/is-verified", authorization, async (req,res) =>{
    try{
        res.json(true)
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;