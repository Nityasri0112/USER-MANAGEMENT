const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",  
    database: "usermanagement"
});

db.connect((err) => {
    if (err) console.log("DB connection failed:", err);
    else console.log("MySQL Connected!");
});

module.exports = db;
