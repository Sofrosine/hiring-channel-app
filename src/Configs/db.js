const mysql = require('mysql')
const db = mysql.createConnection({
  host: process.env.HOST,
  user: '4Lcar82IiY',
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

db.connect (err => {
  if(err) throw err
})

module.exports = db