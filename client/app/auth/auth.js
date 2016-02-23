// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('beer.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.errormsg = '';

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.beers', token);
        $window.localStorage.user = $scope.user.username;
        $location.path('/beers');
      })
      .catch(function (error) {
        $scope.errormsg = 'Sign-in failed. Please make sure password is correct.';
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.beers', token);
        $window.localStorage.user = $scope.user.username;
        $location.path('/beers');
      })
      .catch(function (error) {
        $scope.errormsg = 'Sign-up failed. Try a different username.';
        console.error(error);
      });
  };
});
