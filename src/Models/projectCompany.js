const db = require("../Configs/db");
 
module.exports = {
  getStatus: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT request.id_project,request.id,company.Name AS Company, project.id_company, project.project_name, project.status, engineer.Name AS Engineer,request.id_engineer, request.is_accept FROM company JOIN project ON company.id = project.id_company
         JOIN engineer ON project.id_engineer = engineer.id JOIN request ON request.id_project = project.id_project`,
        (err, response) => {
          if (!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    });
  },
  updateStatus: (data, id) => {
    return new Promise ((resolve,reject) => {
      db.query(
        `UPDATE project SET ? WHERE id_project= ?`,
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
  postProject: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO project SET project_name = ?, id_company = ?`,
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
  getProject: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM project`,
        (err, response) => {
          if (!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    });
  },
  updateProject: (data,status, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE project SET id_engineer=?, status= ? WHERE id_project=?`,
        [data,status, id],
        (err,response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  insertRequest: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO request SET id_project = ?, id_engineer =?`,
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
  }

}