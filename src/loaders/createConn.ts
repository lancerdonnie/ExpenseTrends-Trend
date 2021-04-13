import mysql from 'mysql2';

class DBConnection {
  db;
  constructor() {
    this.db = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    this.checkConnection();
  }

  checkConnection() {
    this.db.getConnection((err, connection) => {
      if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.');
        }
      }
      if (connection) {
        connection.release();
      }
      return;
    });
  }

  query = async (sql: string, values?: any) => {
    return new Promise((resolve, reject) => {
      // execute will internally call prepare and query
      this.db.query(sql, values, (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      });
    }).catch((err) => {
      throw err;
    });
  };
}

export default new DBConnection().query;
