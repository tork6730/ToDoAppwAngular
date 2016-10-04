myApp = angular.module('myApp',[]);


myApp.controller('MainController', function($scope) {

	$scope.todos = [];

	$scope.options = [{
		"priority": "It can wait",
		"number": "0",
	},{
		"priority": "Should get done today",
		"number": "1",
	},{
		"priority": "Get done ASAP",
		"number": "2",
	}];

	$scope.addNewToDo = function(){

		var cycle = {
			"newEvent": $scope.newText,
			"number": $scope.selectedOption};

// Push to the HTML for display 

		$scope.todos.push(cycle);


		$scope.newText=null;
		
		};
	});
