const db = require('../Configs/db')

module.exports = {
  filter: (data) => {
    return new Promise ((resolve, reject) => {
      let pagination = ``
          search = ``
          sort = ``
          order = ``

      if(data.page !== undefined && data.limit !== undefined) {
        data.page = data.limit * (data.page - 1)
        pagination= `LIMIT ${data.limit} OFFSET ${data.page}`
      }
      
      if (data.sort_by === 'skill') {
        sort = `ORDER BY COUNT(skill.skill)`
      }
      else if(data.sort_by !== undefined) {
        sort = `ORDER BY ${data.sort_by}`
      } 

      if (data.order !== undefined) {
        order = `${data.order}`
      }

      if(data.name !== undefined && data.skill !== undefined) {
        search = `WHERE engineer.name LIKE '%${data.name}%' AND skill LIKE '%${data.skill}%'`
      }
      else if (data.name !== undefined && data.skill === undefined) {
        search = `WHERE engineer.name LIKE '%${data.name}%'`
      }
      else if (data.name === undefined && data.skill !== undefined) {
        search = `WHERE skill LIKE '%${data.skill}%'`
      }
      

      db.query(
        `SELECT engineer.id,engineer.Name, engineer.Description, GROUP_CONCAT(DISTINCT skill.Skill) AS Skill, GROUP_CONCAT(DISTINCT showcase.showcase) AS Showcases, engineer.Location, engineer.DateofBirth, engineer.DateCreated, engineer.DateUpdated 
      FROM skill JOIN skills ON skill.id = skills.id_skill RIGHT JOIN engineer ON engineer.id = skills.id_engineer 
      LEFT JOIN showcases ON engineer.id = showcases.id_engineer 
      LEFT JOIN showcase ON showcases.id_showcase = showcase.id 
      ${search} GROUP BY engineer.id ${sort} ${order} ${pagination}`,
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