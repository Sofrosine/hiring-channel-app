const db = require('../../Configs/db')

module.exports = {
  loginEng: (email) => {
    return new Promise ((resolve, reject) => {
      db.query (
        `SELECT * FROM user_engineer WHERE email = ?`,
        [email],
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  }
}