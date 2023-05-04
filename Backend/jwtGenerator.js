const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(s_id, first_name, last_name, current_level) {
  const payload = {
    user: {
      id: s_id,
      firstName: first_name,
      lastName: last_name,
      currentLevel: current_level,
    },
  };
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" });
}
module.exports = jwtGenerator;
