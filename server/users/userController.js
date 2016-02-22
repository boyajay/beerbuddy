var User = require('./userModel.js');
    Q = require('q');
    jwt = require('jwt-simple');
var http = require('http');
var BreweryDb = require('brewerydb-node');
var request = require('request');

// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var updateUser= Q.nbind(User.update, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  getBeerCats: function(req, res, next){

    var url = "http://api.brewerydb.com/v2" + req.query.params + "key=6e28403bdda7e4fe5afbab08bbc77475";
    console.log("url::::::::::: ", url );
    request(url, function(error, response, body) {
      console.log(body);
      res.json(body);
    });
  },

  addfav: function(req, res, next){
    updateUser

  },

  addWish: function(req, res, next){
    
  },
  
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findUser({username: username})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePasswords(password)
            .then(function (foundUser) {
              if (foundUser) {
                var token = jwt.encode(user, 'secret');
                res.json({token: token});
              } else {
                return next(new Error('No user'));
              }
            });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findUser({username: username})
      .then(function (user) {
        if (user) {
          next(new Error('User already exist!'));
        } else {
          return createUser({
            username: username,
            password: password
          });
        }
      })
      .then(function (user) {
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      })
      .fail(function (error) {
        next(error);
      });
  },

  checkAuth: function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token, 'secret');
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function (error) {
          next(error);
        });
    }
  }
};
