angular.module('beer.about', [])

.controller('AboutController', function ($scope, Auth) {
	$scope.signout = function(){
      Auth.signout();
    };
});
