angular.module('beer.beers', [])
.controller('BeersController', function ($scope) {
	    $scope.products = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];
 
    $scope.dropboxitemselected = function () {
    	console.log("function called!");
        alert("drop box item selected");
    }
});