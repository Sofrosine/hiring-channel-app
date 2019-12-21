const model = require('../Models/company');
const form = require('../Helpers/form');
const model2 = require('../Models/checkId/checkId')

module.exports = {
  getAllCompany: (req, res) => {
    model
      .getAllCompany()
      .then(response => {
        //resolve
        form.success(res, response)
      })
      .catch(err => {
        //reject
        console.log(err);
      });
  },
  getProfile: (req, res) => {
    model
      .getProfile()
      .then(responses => {
        // Resolve
        console.log(responses)
        res.json(responses.filter(response => response.Id === req.user.id_company))
      })
      .catch(err => {
        // Reject
        console.log(err)
      })
  },
  postCompany: (req, res) => {
    // const idUnique = req.user.id_company
    const { name, logo, location, description } = req.body;
    const id = req.user.id_engineer
    const data = {
      name,
      logo,
      location,
      description,
      id
    }
    console.log(data)
    model2
      .checkId()
      .then(responses => {
        if(responses.filter(response => {response.id === id}) ) {
          model
            .postCompany(data)
            .then(response => {
              // resolve
              const data = {
                id: response.insertId,
                name: name,
                logo: logo,
                location: location,
                desc: description
              };
              form.success(res, data);
            })
            .catch(err =>
              // reject
              console.log(err)
            );
        }
        else {
          res.send('Your company already registered')
        }
      })
    
  },
  patchCompany: (req, res) => {
    const {query } = req;
    const id = req.user.id_company
    
    model
      .patchCompany(query, id)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  deleteCompany: (req,res) => {
    const { params } = req;
    model
      .deleteCompany(params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  } 
};
