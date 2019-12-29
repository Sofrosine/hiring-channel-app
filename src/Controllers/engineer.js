const model = require("../Models/engineer");
const form = require("../Helpers/form");
const model2 = require("../Models/checkId/checkIdEngineer");
const model3 = require

module.exports = {
  getAllEngineer: (req, res) => {
    model
      .getAllEngineer()
      .then(response => {
        // resolve
        form.success(res, response);
      })
      .catch(err => {
        // reject
        console.log(err);
      });
  },
  getProfile: (req, res) => {
    model
      .getAllEngineer()
      .then(responses => {
        // // Resolve
        console.log(req.user);
        // console.log(responses);
        res.json(
          responses.filter(response => response.id === req.user.id_engineer)
        );
      })
      .catch(err => {
        // Reject
        console.log(err);
      });
  },
  getUser: (req, res) => {
    const {params} = req
    model
      .getAllEngineer()
      .then(responses => {
        // // Resolve
        console.log('params',params.id);
        // console.log(responses.map(response => response.id === Number(params.id)));
        res.json(
          responses.filter(response => response.id === Number(params.id))
        );
      })
      .catch(err => {
        // Reject
        console.log(err);
      });
  },
  postEnginner: (req, res) => {
    const { name, description, location, dateofbirth } = req.body;
    console.log(req.user)
    const id = req.user.id_engineer;
    const data = {
      name,
      description,
      location,
      dateofbirth,
      datecreated: new Date(),
      id
    };
    model2.checkId().then(responses => {
      // console.log(responses);
      if (
        responses.filter(response => {
          response.id === id;
        })
      ) {
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
              datecreated: new Date()
            };
            form.success(res, data);
          })
          .catch(err => {
            // reject
            console.log(err);
          });
      } else {
        res.send("Your data already registered");
      }
    });
  },
  patchEngineer: (req, res) => {
    const { query } = req;
    const date = new Date();
    const id = req.user.id_engineer;

    console.log(req.user);
    model
      .patchEngineer(query, date, id)
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
      .deleteEngineer(params)
      .then(response => {
        // resolve
        res.json(response);
      })
      .catch(err => {
        // Reject
        console.log(err);
      });
  }
};
