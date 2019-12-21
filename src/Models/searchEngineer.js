const db = require("../Configs/db");

module.exports = {
  getSearchEngineer: query => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT engineer.id,engineer.Name, engineer.Description, GROUP_CONCAT(DISTINCT skill.Skill) AS Skill, GROUP_CONCAT(DISTINCT showcase.showcase) AS Showcases, engineer.Location, engineer.DateofBirth, engineer.DateCreated, engineer.DateUpdated FROM skill JOIN skills ON skill.id = skills.id_skill RIGHT JOIN engineer ON engineer.id = skills.id_engineer LEFT JOIN showcases ON engineer.id = showcases.id_engineer LEFT JOIN showcase ON showcases.id_showcase = showcase.id WHERE engineer.name LIKE '%${query.name}%' AND skill LIKE '%${query.skill}%' GROUP BY engineer.id`,
        (err, response) => {
          if (!err) {
            // console.log(query);
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
