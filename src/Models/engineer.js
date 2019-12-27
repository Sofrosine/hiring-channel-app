const db = require('../Configs/db')

module.exports = {
  getAllEngineer: () => {
    return new Promise ((resolve, reject) => {
      db.query(`SELECT engineer.*,GROUP_CONCAT(DISTINCT skill.Skill) AS Skill, GROUP_CONCAT(DISTINCT showcase.showcase) AS Showcases, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id AND request.is_accept = 1)/(SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id) * 100 AS success_rate, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id) AS total_project, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id AND request.is_accept = 1) AS accept_project FROM skill JOIN skills ON skill.id = skills.id_skill RIGHT JOIN engineer ON engineer.id = skills.id_engineer LEFT JOIN showcases ON engineer.id = showcases.id_engineer LEFT JOIN showcase ON showcases.id_showcase = showcase.id LEFT JOIN request ON( engineer.id = request.id_engineer) GROUP BY engineer.id`,
      (err,response) => {
        if (!err) {
          resolve(response)
        } else {
          reject(err)
        }
      })
    })
  },
  // getProfile: () => {
  //   return new Promise((resolve, reject) => {
  //     db.query('SELECT * FROM engineer',
  //       (err, response) => {
  //         if (!err) {
  //           resolve(response)
  //         } else {
  //           reject(err)
  //         }
  //       })
  //   })
  // },
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
  patchEngineer: (data, date, id) => {
    return new Promise ((resolve, reject) => {
      db.query (
        'UPDATE engineer SET ?, dateupdated= ? WHERE id= ?',
        [data, date, id],
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