const db = require('../../Configs/db')

module.exports = {
  loginCompany: (email) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM user_company WHERE email= ?`,
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