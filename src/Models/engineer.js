const db = require('../Configs/db')

module.exports = {
  getAllEngineer: () => {
    return new Promise ((resolve, reject) => {
      db.query(`SELECT engineer.id,engineer.Name, engineer.Description, GROUP_CONCAT(DISTINCT skill.Skill) AS Skill, GROUP_CONCAT(DISTINCT showcase.showcase) AS Showcases, engineer.Location, engineer.DateofBirth, engineer.DateCreated, engineer.DateUpdated 
      FROM skill JOIN skills ON skill.id = skills.id_skill RIGHT JOIN engineer ON engineer.id = skills.id_engineer LEFT JOIN showcases ON engineer.id = showcases.id_engineer LEFT JOIN showcase ON showcases.id_showcase = showcase.id GROUP BY engineer.id`,
      (err,response) => {
        if (!err) {
          resolve(response)
        } else {
          reject(err)
        }
      })
    })
  },
  getProfile: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM engineer',
        (err, response) => {
          if (!err) {
            resolve(response)
          } else {
            reject(err)
          }
        })
    })
  },
  postEngineer: (data) => {
    return new Promise ((resolve, reject) => {
      db.query (
        'INSERT INTO engineer SET ?',
        data,
        (err,response) => {
          if(!err) {
            resolve (response)
          } else {
            reject (err)
          }
        }
      )
    })
  },
  patchEngineer: (data, id) => {
    return new Promise ((resolve, reject) => {
      db.query (
        'UPDATE engineer SET ? WHERE id= ?',
        [data, id],
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
  deleteEngineer: (params) => {
    return new Promise ((resolve, reject) => {
      db.query (
        'DELETE FROM engineer WHERE ?',
        [params],
        (err,response) => {
          if (!err) {
            resolve(response)
          } else {
            reject (err)
          }
        }
      )
    })
  }
}