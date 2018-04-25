// npm packages
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

// new express app
var app = express();

var PORT = process.env.PORT || 3000;

// middleware
app.use(express.static(path.join(__dirname, 'app')));
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: true}));
// parse application/json
app.use(bodyparser.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.use(function(req, res){
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log('http://localhost:'+ PORT);
});

// https://shielded-retreat-99802.herokuapp.com/ | https://git.heroku.com/shielded-retreat-99802.git