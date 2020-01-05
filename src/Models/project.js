const db = require("../Configs/db");

module.exports = {
  getStatus: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT request.id_project,request.id,company.Name AS Company, project.id_company, project.project_name, project.status, engineer.Name AS Engineer,request.id_engineer, request.is_accept FROM company JOIN project ON company.id = project.id_company
         JOIN engineer ON project.id_engineer = engineer.id JOIN request ON request.id_project = project.id_project`,
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    });
  },
  getProject: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT request.id_project,request.id,company.Name AS Company, project.id_company, project.project_name, project.status, engineer.Name AS Engineer,request.id_engineer, request.is_accept FROM company JOIN project ON company.id = project.id_company
         JOIN engineer ON project.id_engineer = engineer.id JOIN request ON request.id_project = project.id_project`,
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
  updateStatus: (data, id)  => {
    return new Promise ((resolve, reject) => {
      db.query(
        `UPDATE request SET ? WHERE id= ?`,   
        [data, id]
      ) 
    })
  },
  deleteStatus: (params) => {
    return new Promise((resolve, reject) => {
      db.query(
        'DELETE FROM request WHERE id_project= ? AND id_engineer = ?',
        [params.id_project, params.id_engineer],
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
};
