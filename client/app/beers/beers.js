angular.module('beer.beers', [])
.controller('BeersController', function ($scope, $window, BeerLists, Data, Auth) {
    $scope.selection1 = [
      {path: '/categories', name: 'by beer type'},
      {path: '/', name: 'coming soon'},
      {path: '/', name: 'coming soon'}
    ];
    $scope.describe = '';
    $scope.selection2 = [];
    $scope.selectedList;
    $scope.data = Data;

    $scope.addWish = function(name){
      var user = $window.localStorage.user;
      BeerLists.addToWish(user, name);
    };   

    $scope.addFav = function(name){
      var user = $window.localStorage.user;
      BeerLists.addToFav(user, name);
    };
 		
 		$scope.getSelect1 = function (selectUrl) {
      selectUrl = selectUrl+'?';
      BeerLists.getList(selectUrl, function(resp){
          $scope.selection2 = JSON.parse(resp.data).data;
      });
    };
    $scope.getSelectedList = function (cat1, cat2){
      var path = "/beers?styleId="+cat2 + "&";
      BeerLists.getList(path, function(resp){
          $scope.selectedList = JSON.parse(resp.data).data;
          $scope.describe = $scope.selectedList[0].style.description;
      });
    };
    $scope.signout = function(){
      Auth.signout();
    };
});