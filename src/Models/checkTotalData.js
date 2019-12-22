const db = require('../Configs/db')

module.exports = {
  checkTotalData: () => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM engineer`,
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