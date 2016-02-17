var User = require('./userModel.js');
    Q = require('q');
    jwt = require('jwt-simple');
var http = require('http');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('31b3b48826470b8ee3ca36aabb7560ab');
var request = require('request');

// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  getBeerCats: function(req, res, next){
  //   var result = brewdb.category.all(function (err, result){
  //     return res.json(result);
  //   });
  // }

    var url = "http://api.brewerydb.com/v2" + req.query.params + "key=6e28403bdda7e4fe5afbab08bbc77475"
    console.log("url::::::::::: ", url );
    request(url, function(error, response, body) {
      //console.log(res);
      console.log(body);
      res.json(body);
    });
  }
} 
