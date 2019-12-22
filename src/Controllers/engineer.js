const model = require('../Models/engineer')
const form = require('../Helpers/form')
const model2 = require('../Models/checkId/checkId')

module.exports = {
  getAllEngineer: (req,res) => {
    model
      .getAllEngineer()
      .then(response => {
        // resolve
        form.success(res, response)
      })
      .catch(err => {
        // reject
        console.log(err)
      })
  },
  getProfile: (req, res) => {
    model
      .getProfile()
      .then(responses => {
        // Resolve
        // console.log(req.user)
        res.json(responses.filter(response => response.Id === req.user.id_engineer))
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  postEnginner: (req, res) => {
    const {name, description, location, dateofbirth} = req.body
    const id = req.user.id_engineer
    const data = {
      name,
      description,
      location,
      dateofbirth,
      datecreated: new Date(),
      id
    }
    model2
      .checkId()
      .then(responses => {
        if(responses.filter(response => {response.id === id})) {
          model
            .postEngineer(data)
            .then(response => {
              // resolve
              const data = {
                id: response.insertId,
                name: name,
                description: description,
                location: location,
                dateofbirth: dateofbirth,
                datecreated: new Date(),
              }
              form.success(res, data)
            })
            .catch(err => {
              // reject
              console.log(err)
            })
        } else {
          res.send('Your data already registered')
        }
      })
  },
  patchEngineer: (req, res) => {
    const {query} = req
    const date = new Date()
    const id = req.user.id_engineer
    
    console.log(req.user)
    model
    .patchEngineer(query, date, id)
    .then(response => {
      // resolve
      res.json(response)
    })
    .catch(err => {
      // Reject
      console.log(err)
    })
  },
  deleteEngineer: (req, res) => {
    const {params} = req
    model
      .deleteEngineer(params)
      .then(response => {
        // resolve
        res.json(response)
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  }
}