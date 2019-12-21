const db = require('../../Configs/db')

module.exports = {
  registerEng: (data) => {
    return new Promise ((resolve, reject) => {
        db.query(`INSERT INTO user_engineer SET ?`, [data], (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        });
      }
    )
  }
}