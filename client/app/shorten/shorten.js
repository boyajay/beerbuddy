angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {}; 
  $scope.validUrl = /^https?:\/\/www.[a-zA-Z]+.(com|net|gov|io|co|uk|au|ca|cn)$/;

  $scope.signout = function () {
  	Auth.signout();
  }
  $scope.addLink = function (data) {

  	if(data.match($scope.validUrl)){
	    Links.addOne(data);
	    console.log(data);
	}
  };



  $scope.test = 'testing';
});
                                 