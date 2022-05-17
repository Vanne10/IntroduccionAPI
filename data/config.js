const sql = require('mssql');

const configS = {
    user: 'vane',
    password: 'password',
    server: 'localhost',
    database: 'api',
    options: {
        "instanceName": "MSSQLSERVER",
        trustServerCertificate: true
    },
};
const pool = {
    query: function (query, callback) {
        sql.connect(configS).then((pool) => {
            return pool.query(query);
        }).then(result => {
            callback(null, result);
        }).catch(err => {
            callback(err, null);
        });
    }
}
module.exports = pool;
/*const pool = {
    query: function (query, callback) {
        sql.connect(configS).then((pool) => {
            return pool.query(query);
        }).then(result => {
            callback(null, result);
        }).catch(err => {
            callback(err, null);
        });
    }
}*/
/*const mysql = require('mysql');

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
module.exports = pool;*/