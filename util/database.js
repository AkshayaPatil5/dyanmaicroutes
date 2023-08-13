const mysql =require('mysql2');
const pool= mysql.createPool({
host: 'localhost',
user:'root',
database:'node-complete',
password:'Ak7558534825@',

});


module.exports = pool.promise();