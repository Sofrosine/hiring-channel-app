const db = require("../../Configs/db");

module.exports = {
  registerComp: data => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO user_company SET ?`, [data], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
