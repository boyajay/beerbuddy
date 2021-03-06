angular.module('beer.mylists', [])
.controller('ListsController', function ($scope, $window, BeerLists, Auth) {
	$scope.lists = {};	
  $scope.noUser = '';
	$scope.signout = function(){
    $window.localStorage.user = null;
    Auth.signout();
  };

  var user = $window.localStorage.user;
  var initialize = function (user){
    
    if (user == 'null'){
      $scope.noUser += 'Please register an account with us to create your own lists.';
    } else {
      BeerLists.getLists(user,function(resp){
        $scope.lists.favorites = resp.data.favorites;
        $scope.lists.wishlist = resp.data.wishlist;
      });
    }
  }

  initialize(user);
});