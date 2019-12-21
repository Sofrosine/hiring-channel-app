const db = require('../../Configs/db')

module.exports = {
  addShowcaseEng: (data) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `INSERT INTO showcases SET ?`,
        data,
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
  getShowcase: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM showcases`,
        (err, response) => {
          if (!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  patchShowcase: (data, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE showcases SET ? WHERE ?`,
        [data, params],
        (err, response) => {
          if (!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  deleteShowcase: (params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM showcases WHERE ?`,
        [params],
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