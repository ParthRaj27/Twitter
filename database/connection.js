const mysql = require("mysql2");
require("dotenv").config();
const host = process.env.HOST;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
var connection = mysql.createConnection({
  host: host,
  user: "25DEV009",
  password: password,
  database: database
});
connection.connect((err)=>{
  if(err){
    console.log(err.stack)
  }
  console.log("connected successfully")
})
module.exports = connection;