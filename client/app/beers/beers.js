angular.module('beer.beers', [])
.controller('BeersController', function ($scope, BeerLists) {
    $scope.selection1 =[
      {path: '/categories', name: 'by beer type'},
      {path: '/locations/:region', name: 'by region'},
      {path: '/breweries', name: 'by brewery'}
    ];
    $scope.describe = '';
    $scope.selection2 = [];
    $scope.selectedList;
 		
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


    }
      
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