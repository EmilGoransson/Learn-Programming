const Pool = require("pg").Pool;

const pool = new Pool({
  user: "learnprogramming",
  password: "proglin",
  host: "localhost",
  port: "5432",
  database: "learnprogramming"
})

module.exports = pool