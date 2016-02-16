var User = require('./userModel.js');
    Q = require('q');
    jwt = require('jwt-simple');
var http = require('http');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('31b3b48826470b8ee3ca36aabb7560ab');

// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  getBeer: function(dataObj){
    brewdb.beer.getById("avMkil", {}, function (err, res){
      console.log (res);
      return res;
    }); 
  }
  //   http.get("http://api.brewerydb.com/v2/categories?key=31b3b48826470b8ee3ca36aabb7560ab", function(res) {
  //     //console.log(res);
  //     dataObj= res;
  //     console.log("passed in object is " , dataObj);
  //     console.log("Got response: " + res.statusCode);
  //   }).then(function(val) {
  //     console.log("getBeer occured, value is ", val);
  //     return val;
  //   });
  // }
};
