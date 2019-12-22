const db = require('../../Configs/db')

module.exports = {
  addShowcase: (query) => {
    return new Promise ((resolve,reject) => {
      db.query(
        `INSERT INTO showcase SET showcase='${query.showcase}'`,
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
  getShowcase: () => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM showcase`,
        (err, response) =>{
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  patchShowcase: (query, params) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `UPDATE showcase SET ? WHERE ?`,
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
  deleteShowcase: (params) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `DELETE FROM showcase WHERE ?`,
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