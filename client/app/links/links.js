angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {

  $scope.signout = function () {
  	Auth.signout();
  }
  // Your code here
  $scope.data = {
  };
  Links.getAll().then(function (resp) {
      $scope.data.links = resp;
  });


});
