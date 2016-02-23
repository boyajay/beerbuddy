angular.module('beer', [
  'beer.beers',
  'beer.about',
  'ngRoute',
  'beer.services',
  'beer.auth',
  'beer.mylists'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/beers', {
      templateUrl: 'app/beers/beers.html',
      controller: 'BeersController'
    })
    .when('/about', {
      templateUrl: 'app/about/about.html',
      controller: 'AboutController'
    })
    .when('/myLists', {
      templateUrl: 'app/mylists/mylists.html',
      controller: 'ListsController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .otherwise({
      redirectTo: '/beers'
      });
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.shortly');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
})
