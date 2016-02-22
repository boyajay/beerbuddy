angular.module('beer.mylists', [])

.controller('ListsController', function ($scope, $window, BeerLists) {

	$scope.lists = {};	
  $scope.getMyLists = function(){
    var user = $window.localStorage.user;
    BeerLists.getLists(user,function(resp){
      console.log('resp to getMyLists is ', resp);
      $scope.lists.favorites = resp.favorites; //JSON.parse(resp.data)
      $scope.lists.favorites = resp.wishlist;
    });
  }

});
