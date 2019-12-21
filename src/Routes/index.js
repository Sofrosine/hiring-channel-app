const express = require('express')
const company = require('./company')
const engineer = require('./engineer')
const skill = require('./skill')
const showcase = require('./showcase')

const Router = express.Router()

Router.get('/', (req, res) => {
  return res.send('Homepage')
})
Router.use('/company', company)
Router.use('/engineer', engineer)
Router.use('/skill', skill)
Router.use('/showcase', showcase)



module.exports = Router