angular.module('beer.beers', [])
.controller('BeersController', function ($scope, BeerLists) {
    $scope.selection1 =[
      {path: '/categories', name: 'by beer type'},
      {path: '/locations/:region', name: 'by region'},
      {path: '/breweries', name: 'by brewery'}
    ];
    $scope.selection2 = [];
    $scope.dataObj = "in the scope";
 		
 		$scope.getSelect1 = function (selectUrl) {
      console.log('selected category url is ', selectUrl);
      BeerLists.getList(selectUrl, function(data){
          $scope.selection2 = data;
      });
    };
      
      // .then(function(val){console.log(val);
      //   $scope.dataObj = val;
      //   $scope.dataObj = val; 
      //   console.log("returned result is ",   $scope.selection2);
      //   console.log("or returned result is ",   $scope.dataObj);
      // })
      // .catch(function(){console.log('shit fucked up')});

    $scope.dropboxitemselected = function () {
    	console.log("function called!");
        alert("drop box item selected");
    };
    // document.getElementById("mySelect").value
});