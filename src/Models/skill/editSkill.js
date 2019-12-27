const db = require('../../Configs/db')

module.exports = {
  addSkillEng: (data) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `INSERT INTO skills SET ?`,
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
  getSkill: () => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM skills`,
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
  patchSkill: (data, params) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `UPDATE skills SET ? WHERE ?`,
        [data,params],
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
  deleteSkill: (params) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `DELETE FROM skills WHERE id_engineer= ? AND id_skill = ?`,
        [params.id_engineer, params.id_skill],
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