const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(
  s_id,
  first_name,
  last_name,
  current_level,
  email,
  profile_picture
) {
  const payload = {
    user: {
      id: s_id,
      firstName: first_name,
      lastName: last_name,
      currentLevel: current_level,
      email: email,
      profilePicture: profile_picture,
    },
  };
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "30d" });
}
module.exports = jwtGenerator;
