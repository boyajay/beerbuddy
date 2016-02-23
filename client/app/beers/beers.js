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
      console.log('adding wish for user ', user);
      BeerLists.addToWish(user, name, function(val){console.log(val)});
    };   

    $scope.addFav = function(name){
      var user = $window.localStorage.user;
      console.log('adding wish for user ', user);
      BeerLists.addToFav(user, name, function(val){console.log(val)});
    };
 		
 		$scope.getSelect1 = function (selectUrl) {
      selectUrl = selectUrl+'?';
      console.log('selected category url is ', selectUrl);
      BeerLists.getList(selectUrl, function(resp){
          $scope.selection2 = JSON.parse(resp.data).data;
          console.log($scope.selection2);
      });
    };
    $scope.getSelectedList = function (cat1, cat2){
      var path = "/beers?styleId="+cat2 + "&";
      console.log('selected path is ', path);
      BeerLists.getList(path, function(resp){
          $scope.selectedList = JSON.parse(resp.data).data;
          console.log($scope.selectedList);
          $scope.describe = $scope.selectedList[0].style.description;
          console.log($scope.describe);
      });
    };
    $scope.signout = function(){
      console.log('signing out');
      Auth.signout();
    };
    $scope.dropboxitemselected = function () {
    	console.log("function called!");
        alert("drop box item selected");
    };
    // document.getElementById("mySelect").value
});