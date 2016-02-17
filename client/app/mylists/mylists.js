angular.module('beer.mylists', [])

.controller('ListsController', function ($scope, Data) {

	$scope.data = Data;

});
