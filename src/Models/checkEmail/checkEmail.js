const db = require("../../Configs/db");

module.exports = {
  checkEmailEng: data => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT email FROM user_engineer WHERE email= ?`,
        [data],
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
  checkEmailCom: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT email FROM user_company WHERE email=?`,
        [data],
        (err, response) => {
          if (!err) {
            resolve(response)
          } else (
            reject(err)
          )
        }
      )
    })
  }
};
