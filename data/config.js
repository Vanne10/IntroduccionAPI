const sql = require('mssql');

const config = {
    user: 'vane',
    password: 'password',
    server: 'localhost',
    database: 'api',
    options: {
        trustServerCertificate: true
    }
};

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

module.exports = pool;