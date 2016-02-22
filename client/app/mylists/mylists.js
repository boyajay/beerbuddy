angular.module('beer.mylists', [])
.controller('ListsController', function ($scope, $window, BeerLists, Auth) {
	$scope.lists = {};	
	$scope.signout = function(){
      console.log('signing out');
      Auth.signout();
  };
  var user = $window.localStorage.user;
  console.log('user is ', user);
  BeerLists.getLists(user,function(resp){
    console.log('resp to getMyLists is ', resp);
    $scope.lists.favorites = resp.data.favorites; //JSON.parse(resp.data)
    $scope.lists.wishlist = resp.data.wishlist;
  });
});