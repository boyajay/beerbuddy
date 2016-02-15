angular.module('beer.beers', [])
.controller('BeersController', function ($scope) {
	    $scope.products = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];
	   $scope.test = 'test';
	  $scope.selection1 =[
      {path: '/category', name: 'by beer type'},
      {path: '/location/region', name: 'by region'},
      {path: '/breweries', name: 'by brewery'}
    ];
 
    $scope.dropboxitemselected = function () {
    	console.log("function called!");
        alert("drop box item selected");
    };
    // document.getElementById("mySelect").value
});