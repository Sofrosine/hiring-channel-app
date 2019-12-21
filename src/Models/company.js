const db = require('../Configs/db')

module.exports = {
  getAllCompany: () => {
    return new Promise ((resolve,reject) => {
      db.query('SELECT * FROM company', 
      (err, response) => {
        if(!err) {
          resolve(response)
        } else {
          reject(err)
        }
      })
    })
  },
  getProfile: () => {
    return new Promise ((resolve, reject) => {
      db.query('SELECT * FROM company',
      (err, response) => {
        if(!err) {
          resolve(response)
        } else {
          reject(err)
        }
      })
    })
  },
  postCompany: data => {
    return new Promise ((resolve,reject) => {
      db.query (
        'INSERT INTO company SET ?',
        data,
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject (err)
          }
        }
      )
    })
  },
  patchCompany: (query,id) => {
    return new Promise ((resolve, reject) => {
      db.query (
        'UPDATE company SET ? WHERE id=?',
        [query, id],
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
  deleteCompany: (params) => {
    return new Promise ((resolve,reject) => {
      db.query(
        'DELETE FROM company WHERE ?',
        [params],
        (err,response) => {
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