const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "EduGaming",
  password: "secret",
  database: "EduGaming"
});

module.exports = con;
