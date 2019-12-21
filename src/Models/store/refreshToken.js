const db = require('../../Configs/db')

module.exports = {
  storeToken: (token) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `INSERT INTO refresh_token SET refresh_token=?`,
        [token],
        (err, response) => {
          if(!err){
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  checkToken: () => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM refresh_token`,
        (err,response) => {
          if(!err) {
            resolve(response)
          }
          else {
            reject(err)
          }
        }
      )
    })
  },
  deleteToken: () => {
    return new Promise ((resolve, reject) => {
      db.query (
        `DELETE FROM refresh_token`,
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