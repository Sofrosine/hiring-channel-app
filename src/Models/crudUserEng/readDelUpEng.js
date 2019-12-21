const db = require("../../Configs/db");

module.exports = {
  readEng: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM user_engineer`, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteEng: params => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM user_engineer WHERE ?`,
        [params],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  patchEngEmail: (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE user_engineer SET ? WHERE ?`,
        [query, params],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  patchEngPassword: (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE user_engineer SET password=? WHERE id_engineer=?`,
        [query, params],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
