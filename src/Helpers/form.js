const model = require("../Models/checkTotalData");

module.exports = {
  success: (res, data) => {
    res.json({
      status: 200,
      msg: "success",
      data
    });
  },
  filter: (res, query, data) => {
    let totalPage = 0;
    model
      .checkTotalData()
      .then(response => {
        totalPage = Math.ceil(response.length / query.limit);
        if (query.num > totalPage) {
          res.sendStatus(404);
        }

        res.json({
          status: 200,
          msg: "success",
          totalData: `${response.length}`,
          page: `${query.num} of ${totalPage}`,
          data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
