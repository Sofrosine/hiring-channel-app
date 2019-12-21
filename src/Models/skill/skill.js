const db = require('../../Configs/db')

module.exports = {
  addSkill: (query) => {
    return new Promise ((resolve,reject) => {
      db.query(
        `INSERT INTO skill SET skill='${query.skill}'`,
        (err,response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  getSkill: () => {
    return new Promise ((resolve, reject) => {
      db.query(
        'SELECT * FROM skill',
        (err,response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        })
    })
  },
  patchSkill: (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE skill SET ? WHERE ?`,
        [query, params],
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(er)
          }
        }
      )
    })
  },
  deleteSkill: (params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM skill WHERE ?`,
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
  }
}