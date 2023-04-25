const router = require("express").Router()
const pool = require("./dbConfig")
const authorization = require("C:/II1305/Learn-Programming/Backend/middleware/authorization.js")


router.get("/", authorization, async (req,res)=>{
    try{
        //req.user has payload
        //res.json(req.user);
        const user = await pool.query("SELECT * FROM student WHERE s_id = $1", [req.user])
        res.json(user.rows[0]);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})
module.exports = router;