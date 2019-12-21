require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require('../Helpers/auth')

const controller = require("../Controllers/engineer");

const searchController = require("../Controllers/searchEngineer");
const sortController = require("../Controllers/sortEngineer");
const paginationController = require("../Controllers/paginationEngineer");
const filterController = require('../Controllers/filter')

const editSkill = require('./editSkill')
const editShowcase = require("./editShowcase");

const registerEngController = require('../Controllers/crudUserEng/registerEng')

const loginEngController = require('../Controllers/loginEng/loginEng')

const Router = express.Router();

Router.get("/", auth.authentication, controller.getAllEngineer); // localhost:5000/engineer/
Router.get('/profile', auth.authentication, controller.getProfile)
Router.post("/", auth.authentication ,controller.postEnginner); // localhost:5000/engineer/
Router.patch("/", auth.authentication, controller.patchEngineer); // localhost:5000/engineer/:id
Router.delete("/:id", controller.deleteEngineer); // localhost:5000/engineer/:id

Router.get("/search", searchController.getSearchEngineer); //localhost:5000/engineer/search
Router.get("/sort", sortController.getSortEngineer);
Router.get("/page", paginationController.getPaginationEngineer);
Router.get('/filter', filterController.filter)

Router.use('/skill', editSkill)
Router.use('/showcase', editShowcase)

Router.post('/register', registerEngController.registerEng )
Router.get('/login', loginEngController.loginEng)

// Router.post("/token", (req, res) => {
//   const refreshToken = req.body.token;
//   if (refreshToken == null) return res.sendStatus(401);
//   // if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
//   model
//     .checkToken()
//     .then(response => {
//       if(response[0].refresh_token !== refreshToken) return res.sendStatus(403)
//       jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         const accessToken = jwt.sign(
//           { id_engineer: user.id_engineer },
//           process.env.ACCESS_TOKEN_SECRET,
//           { expiresIn: "15s" }
//         );
//         res.json({ accessToken: accessToken });
//       });
//     })

//   // jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//   //   if (err) return res.sendStatus(403);
//   //   const accessToken = jwt.sign(
//   //     { id_engineer: user.id_engineer },
//   //     process.env.ACCESS_TOKEN_SECRET,
//   //     { expiresIn: "15s" }
//   //   );
//   //   res.json({ accessToken: accessToken });
//   // });
// });

// Router.delete('/204/logout', (req, res) => {
//   // refreshTokens = refreshTokens.filter(token => token !== req.body.token)
//   model
//     .deleteToken()
//     .then(response => {
//       res.sendStatus(204)
//     })
// })



module.exports = Router;
