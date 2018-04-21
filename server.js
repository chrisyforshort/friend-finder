// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, 'app')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRoutes')(app)

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log('http://localhost:'+ PORT);
  
})

// https://shielded-retreat-99802.herokuapp.com/ | https://git.heroku.com/shielded-retreat-99802.git