const model = require("../Models/filter");
const form = require("../Helpers/form");

module.exports = {
  filter: (req, res) => {
    // const {name, skill, limit, page, sort_by, order} = req.body
    const { query } = req;
    // name
    // let data = {
    //   name,
    //   skill,
    //   limit,
    //   page,
    //   sort_by,
    //   order
    // }

    model
      .filter(query)
      .then(response => {
        // Resolve
        console.log(response)
        form.filter(res, query, response);
      })
      .catch(err => {
        // Reject
        console.log(err);
      });
  }
};
