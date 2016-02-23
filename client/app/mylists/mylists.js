angular.module('beer.mylists', [])
.controller('ListsController', function ($scope, $window, BeerLists, Auth) {
	$scope.lists = {};	
  $scope.noUser = '';
	$scope.signout = function(){
      console.log('signing outt');
      $window.localStorage.user = null;
      console.log('window user is now ', $window.localStorage.user);
      Auth.signout();
  };

  var user = $window.localStorage.user;
  console.log('user is ', user);
  if (user){
    BeerLists.getLists(user,function(resp){
      console.log('resp to getMyLists is ', resp);
      $scope.lists.favorites = resp.data.favorites; //JSON.parse(resp.data)
      $scope.lists.wishlist = resp.data.wishlist;
    });
  } else {
    $scope.noUser = 'Please register an account with us to create your own lists.';
  }
});