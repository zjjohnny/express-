const mysql=require("mysql");
module.exports.dbconfig=function () {
    const db=mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"excrise1"
    });
    return db;
}