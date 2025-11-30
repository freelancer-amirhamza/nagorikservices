import mysql from "mysql2/promise";
import {config} from "dotenv"


config()

/* ========= Mysql database for local server ===========  */

export const poolDB = mysql.createPool({
    user:process.env.DB_USER ,
    host:process.env.DB_HOST,
    port : process.env.DB_PORT,
    database:process.env.DATABASE,
    waitForConnections:true,
    connectionLimit:5,
    queueLimit:0,
    idleTimeout:10000,
    connectTimeout:30000,
    charset:"utf8mb4"
});

async function testConnection() {
   let connection;
   try {
    connection = await poolDB.getConnection();
    const [rows] = await connection.execute(`SELECT NOW()`);
    console.log('MySQL Database connected successfully:', rows[0]);
    connection.release();
   } catch (error) {
    console.error("MySQL Database connection error:", error);
    if(connection) connection.release();
   }
}
testConnection();
