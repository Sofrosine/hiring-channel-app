const db = require('../../Configs/db')

module.exports = {
  checkPasswordEng: (email) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM user_engineer WHERE email=?`,
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
  },
  checkPasswordComp: (query) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM user_company`,
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