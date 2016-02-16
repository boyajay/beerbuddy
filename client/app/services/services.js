angular.module('beer.services', [])
.factory('BeerLists', function ($http) {
  var getList = function (path){
    path = path || '';
    $.ajax({
      url: 'http://api.brewerydb.com/v2/?key=31b3b48826470b8ee3ca36aabb7560ab',
      type: 'GET',
      success: function(data) {
        // Don't bother if we have nothing to work with
        console.log(data);
      },
      error: function(data) {
        console.error('Failed to fetch beers');
      }
    });

    // $http({
    //   method: 'GET',
    //   url: 'http://api.brewerydb.com/v2'+path+'/?key=31b3b48826470b8ee3ca36aabb7560ab'
    //   // key: '31b3b48826470b8ee3ca36aabb7560ab'
    // }).then(function successCallback(response) {
    //     console.log("GREAT SUCCESS!!");
    //     return response;
    //     // this callback will be called asynchronously
    //     // when the response is available
    //   }, function errorCallback(err) {
    //     console.log("ajax call failed");
    //     return err;
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });
  }
  return {
    getList: getList
  }
})
.factory('Links', function ($http) {
  // Your code here
  var linksInstance = {
    getAll: function (){
      return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data;
    });
    },

    addOne: function (data){
      var obj = { url: data };
      return $http.post('/api/links', obj)
      .then(function (resp) {
        console.log(resp);
        return resp;
      },
      function (err) {
        console.log("SERVER ERROR: ", err);
        return err;
      }
      );
    }
  };
  return linksInstance;
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
