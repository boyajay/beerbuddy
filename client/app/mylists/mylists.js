angular.module('beer.mylists', [])
.controller('ListsController', function ($scope, $window, BeerLists, Auth) {
	$scope.lists = {};	
  var user = $window.localStorage.user;
  BeerLists.getLists(user,function(resp){
    console.log('resp to getMyLists is ', resp);
    $scope.lists.favorites = resp.data.favorites; //JSON.parse(resp.data)
    $scope.lists.wishlist = resp.data.wishlist;
  });
});