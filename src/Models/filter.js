const db = require('../Configs/db')

module.exports = {
  filter: (query) => {
    return new Promise ((resolve, reject) => {
      let pagination = ``
          search = ``
          sort = ``
          order = ``
          query.limit = query.limit || 5
          query.page = query.page || 1
          query.num = query.page

      if(query.page !== undefined && query.limit !== undefined) {
        query.page = query.limit * (query.page - 1)
        pagination= `LIMIT ${query.limit} OFFSET ${query.page}`
      }
      
      if (query.sort_by === 'skill') {
        sort = `ORDER BY COUNT(skill.skill)`
      }
      else if(query.sort_by !== undefined) {
        sort = `ORDER BY ${query.sort_by}`
      } 

      if (query.order !== undefined) {
        order = `${query.order}`
      }

      if(query.name !== undefined && query.skill !== undefined) {
        search = `WHERE engineer.name LIKE '%${query.name}%' AND skill LIKE '%${query.skill}%'`
      }
      else if (query.name !== undefined && query.skill === undefined) {
        search = `WHERE engineer.name LIKE '%${query.name}%'`
      }
      else if (query.name === undefined && query.skill !== undefined) {
        search = `WHERE skill LIKE '%${query.skill}%'`
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