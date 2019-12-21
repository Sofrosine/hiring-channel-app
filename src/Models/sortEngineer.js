const db = require('../Configs/db')
const mysql = require('mysql')

module.exports = {
  getSortEngineer: (query) => {
    return new Promise ((resolve, reject) => {
      db.query(
        "SELECT engineer.id,engineer.Name, engineer.Description, GROUP_CONCAT(DISTINCT skill.Skill) AS Skill, GROUP_CONCAT(DISTINCT showcase.showcase) AS Showcases, engineer.Location, engineer.DateofBirth, engineer.DateCreated, engineer.DateUpdated FROM skill JOIN skills ON skill.id = skills.id_skill RIGHT JOIN engineer ON engineer.id = skills.id_engineer LEFT JOIN showcases ON engineer.id = showcases.id_engineer LEFT JOIN showcase ON showcases.id_showcase = showcase.id GROUP BY engineer.id ORDER BY engineer.Name ?, COUNT(Skill) ?,  engineer.DateUpdated ?",
        [
          mysql.raw(query.order),
          mysql.raw(query.order),
          mysql.raw(query.order)
        ],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    })
  }
}