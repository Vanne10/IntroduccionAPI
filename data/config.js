const mysql = require('mysql');

//Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'api',
};

//Create a MySQL pool
const pool = mysql.createPool(config);
//nuevo commit
//Export the pool
module.exports = pool;