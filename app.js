const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const server = express();
const jsonParser = bodyParser.json();


/* ===========================SERVER USE=========================== */
server.use(express.static(__dirname + '/dist/pokedex'))

server.use(jsonParser);

server.use(bodyParser.urlencoded({extended: true}))

server.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, access_token');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);


  // Pass to next layer of middleware
  next();
});
/* ================================================================ */

server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/pokedex/index.html'))
});

server.listen(process.env.PORT || 3001);