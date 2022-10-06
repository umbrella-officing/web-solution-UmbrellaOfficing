const mysql = require("mysql");

module.exports = function(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "ejup#_&ght0987",
        database: "umbrella_officing",
        port: 3000
    });
}