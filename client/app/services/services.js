angular.module('beer.services', [])
.factory('BeerLists', function ($http) {
  var  favorites= [];
    var  wishlist= [];
  var getList = function (path, callback) {
    path = path || '';
    return $http({
      method: 'GET',
      params: {params: path},
      url: '/api/getBeerCats'
    })
    .then(callback);
  };
  var addToFav = function (user, beer) {
    return $http({
      method: 'POST',
      params: {listType: 'favorites',
              username: user,
              beer: beer},
      url: '/api/users/addToList'
    });
  };

  var addToWish = function (user, beer, callback) {
    return $http({
      method: 'POST',
      params: {
                listType: 'wishlist',
                username: user,
                beer: beer
              },
      url: '/api/users/addToList'
    });
  };

  var getLists = function (user, callback) {
    return $http({
      method: 'GET',
      params: {
                username: user
              },
      url: '/api/users/getLists'
    })
    .then(callback);
  };
  return {
    getList: getList,
    getLists: getLists,
    addToFav: addToFav,
    addToWish: addToWish
  };
})
.factory('Data', function () {
  return{
    favorites: [],
    wishlist: []
  }
})
.factory('Auth', function ($http, $location, $window) {
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
    return !!$window.localStorage.getItem('com.beers');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.beers');
    $window.localStorage.user = null;
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
