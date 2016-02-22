angular.module('beer.about', [])

.controller('AboutController', function ($scope, Auth) {
	$scope.signout = function(){
      console.log('signing out');
      Auth.signout();
    };
});
