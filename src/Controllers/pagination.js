const model = require("../Models/filter");
const form = require("../Helpers/form");

module.exports = {
  getEngineer: (req, res) => {
    const {query} = req
    // let { name, skill, sort_by, order, limit, page } = req.query;
    // let data = {
    //   name,
    //   skill,
    //   sort_by,
    //   order,
    //   limit,
    //   page
    // };
    model.allEngineer(query).then(result => {
      // console.log(result)
      model
        .filter(query)
        .then(data => {
          //resolve
          if (req.query.limit != undefined && req.query.page != undefined) {
            res.json({
              status: 200,
              msg: "Success",
              page:
                req.query.page,
              pages: Math.ceil(result.length / req.query.limit),
              total: result.length + " results",
              data
            });
          } else
            res.json({
              status: 200,
              msg: "Success",
              page:
                req.query.page +
                " from " +
                Math.ceil(result.length / req.query.limit) +
                " pages",
              total: result.length + " results",
              data
            });
          // console.log(response)
          // console.log(req.user.id_user)
          // console.log(req.user.id_user)
        })
        .catch(err => {
          //reject
          console.log(err);
        });
    });
  }
};
