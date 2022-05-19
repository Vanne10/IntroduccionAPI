const sql = require('mssql');

// set database connection credentials
const config = {
    user: 'vane',
    password: 'password',
    server: 'localhost',
    database: 'api',
    options: {
        trustServerCertificate: true
    }
};
//create a MSSQL pool
const pool = {
    query: function (query, callback) {
        sql.connect(config).then((pool) => {
            return pool.query(query);
        }).then(result => {
            callback(null, result);
        }).catch(err => {
            callback(err, null);
        });
    }
}
// Export the pool
module.exports = pool;