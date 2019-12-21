const db = require('../../Configs/db')

module.exports = {
  readComp: () => {
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
  },
  deleteComp: (params) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `DELETE FROM user_company WHERE ?`,
        [params],
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
  patchCompEmail: (query, params) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `UPDATE user_company SET ? WHERE ?`,
        [query, params],
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
  patchCompPassword: (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE user_company SET password=? WHERE id_company=?`,
        [query, params],
        (err, response) => {
          if (!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  }
}