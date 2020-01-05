const model = require('../Models/project')
const form = require('../Helpers/form')

module.exports = {
  getStatus: (req, res) => {
    model
    .getStatus()
    .then(responses => {
      console.log(req.user)
      res.json(responses.filter(response => response.id_engineer === req.user.id_engineer))
    })
    .catch(err => {
      console.log(err)
    })
  },
  getProject: (req,res) => {
    model
    .getProject()
    .then(responses => {
      if (responses.filter(response => response.id_engineer === req.user.id_engineer).length !== 0) {
        res.json(responses.filter(response => (response.id_engineer === req.user.id_engineer) && (response.is_accept === 2 || response.is_accept === 1)))
      } else {
        res.json(responses.filter(response => response.id_engineer === req.user.id_engineer))
      }
    })
    .catch(err => { 
      console.log(err)  
    })
  },
  updateStatus: (req, res) => {
    const { query } = req;
    const {id} = req.params 

    console.log('query', query)  
    model
      .updateStatus(query, id)  
      .then(response => {
        // resolve
        res.json(response);
      })
      .catch(err => {
        // Reject
        console.log(err);
      });
  },
  deleteEngineer: (req, res) => {
    const { params } = req;
    model
      .deleteStatus(params)
      .then(response => {
        // resolve
        res.json(response);
      })
      .catch(err => {
        // Reject
        console.log(err);
      });
  }
}