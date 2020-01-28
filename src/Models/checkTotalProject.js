const db = require('../Configs/db')

module.exports = {
  checkTotalProject: (params) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM request WHERE id_engineer = ? AND is_accept = 2`,
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