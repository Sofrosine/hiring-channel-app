const db = require("../Configs/db");

module.exports = {
  filter: query => {
    return new Promise((resolve, reject) => {
      let pagination = ``;
      search = ``;
      sort = ``;
      order = ``;
      query.limit = query.limit || 5;
      query.page = query.page || 1;
      query.num = query.page;

      if (query.page !== undefined && query.limit !== undefined) {
        query.page = query.limit * (query.page - 1);
        pagination = `LIMIT ${query.limit} OFFSET ${query.page}`;
      }

      if (query.sort_by === "skill") {
        sort = `ORDER BY COUNT(skill.skill)`;
      } else if (query.sort_by !== undefined) {
        sort = `ORDER BY ${query.sort_by}`;
      } else if (query.sort_by === "") {
        sort = ``;
      }

      if (query.order !== undefined) {
        order = `${query.order}`;
      }

      if (query.name !== undefined && query.skill !== undefined) {
        search = `WHERE engineer.name LIKE '%${query.name}%' AND skill LIKE '%${query.skill}%'`;
      } else if (query.name !== undefined) {
        search = `WHERE engineer.name LIKE '%${query.name}%'`;
      } else if (query.skill !== undefined) {
        search = `WHERE skill LIKE '%${query.skill}%'`;
      }

      db.query(
        `SELECT engineer.*,GROUP_CONCAT(DISTINCT skill.Skill) AS Skill, GROUP_CONCAT(DISTINCT showcase.showcase) AS Showcases, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id AND request.is_accept = 1)/(SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id) * 100 AS success_rate, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id) AS total_project, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id AND request.is_accept = 1) AS accept_project FROM skill JOIN skills ON skill.id = skills.id_skill RIGHT JOIN engineer ON engineer.id = skills.id_engineer LEFT JOIN showcases ON engineer.id = showcases.id_engineer LEFT JOIN showcase ON showcases.id_showcase = showcase.id LEFT JOIN request ON( engineer.id = request.id_engineer)
      ${search} GROUP BY engineer.id ${sort} ${order}
          ${pagination}`,
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  allEngineer: data => {
    let search = ``;

    if (data.name != undefined && data.skill != undefined) {
      search = `WHERE engineer.name LIKE '%${data.name}%' AND skill.skill LIKE '%${data.skill}%'`;
    } else if (data.name != undefined) {
      search = `WHERE engineer.name LIKE '%${data.name}%'`;
    } else if (data.skill != undefined) {
      search = `WHERE skill.skill LIKE '%${data.skill}%'`;
    }

    return new Promise((resolve, reject) => {
      db.query(
        `SELECT engineer.*,GROUP_CONCAT(DISTINCT skill.Skill) AS Skill, GROUP_CONCAT(DISTINCT showcase.showcase) AS Showcases, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id AND request.is_accept = 1)/(SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id) * 100 AS success_rate, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id) AS total_project, (SELECT COUNT(*) FROM request WHERE request.id_engineer = engineer.id AND request.is_accept = 1) AS accept_project FROM skill 
        JOIN skills ON skill.id = skills.id_skill RIGHT JOIN engineer ON engineer.id = skills.id_engineer LEFT JOIN showcases ON engineer.id = showcases.id_engineer LEFT JOIN showcase ON showcases.id_showcase = showcase.id 
        LEFT JOIN request ON( engineer.id = request.id_engineer)
        ${search}
        GROUP BY engineer.id`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
