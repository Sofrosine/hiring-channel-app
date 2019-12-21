const db = require('../Configs/db')

module.exports = {
  getUser: () => {
    return new Promise ((resolve, reject) => {
      db.query(
        'SELECT * FROM user',
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