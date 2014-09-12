// create our app
var app = angular.module('MyDemoApp', ['ngRoute']);

//set up routing
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.otherwise({
		redirectTo: "/"
	});
}]);

// add a controller
app.controller('DemoCtrl', ['$scope', function($scope){
	
}]);