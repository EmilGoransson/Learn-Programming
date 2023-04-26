const jwt = require("jsonwebtoken");
require("dotenv").config();


function jwtGenerator(s_id){
    const payload = {
        user: s_id
    }
    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1hr"})
}
module.exports = jwtGenerator