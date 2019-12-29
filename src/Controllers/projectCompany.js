const model = require('../Models/projectCompany')

module.exports = {
  getStatus: (req, res) => {
    model
    .getStatus()
    .then(response => {
      console.log(req.user)
      console.log(response)
      res.json(response.filter(response => response.id_company === req.user.id_company))  
    })
    .catch(err => {
      console.log(err)
    })
  },
  updateStatus: (req,res) => {
    const { query } = req;
    const { id_project } = req.params
    console.log('query', query)   
    model
      .updateStatus(query, id_project)
      .then(response => {
        console.log(req.user)
        res.json(response)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getProject: (req,res) => {
    model
    .getProject()
    .then(response => {
      res.json(response.filter(response => response.id_company === req.user.id_company))
    })
    .catch(err => {
      console.log(err)
    })
  },
  updateProject: (req, res) => {
    const {id_engineer,status, id_project} = req.query
    model
    .updateProject(id_engineer,status,id_project)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  },
  insertRequest: (req, res) => {
    const { id_engineer, id_project } = req.body
    model
    .insertRequest(id_project, id_engineer)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}