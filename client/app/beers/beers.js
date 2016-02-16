angular.module('beer.beers', [])
.controller('BeersController', function ($scope, BeerLists) {
    $scope.selection1 =[
      {path: '/categories', name: 'by beer type'},
      {path: '/location/region', name: 'by region'},
      {path: '/breweries', name: 'by brewery'}
    ];
    $scope.selection2;
    $scope.dataObj;
 		
 		$scope.getSelect1 = function (selectUrl) {
      console.log('selected category url is ', selectUrl);
      $scope.selection2 = BeerLists.getList(selectUrl, $scope.dataObj);
      console.log("returned result is ",   $scope.selection2);
      console.log("or returned result is ",   $scope.dataObj);
 		};
    $scope.dropboxitemselected = function () {
    	console.log("function called!");
        alert("drop box item selected");
    };
    // document.getElementById("mySelect").value
});