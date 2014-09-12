// create our app
var app = angular.module('MyDemoApp', ['ngRoute']);

//set up routing
/*
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
                .when("/", {
                    controller: "HomeCtrl",
                    templateUrl: "partials/home.html"
        })
            .otherwise({
		redirectTo: "/"
	});
}]);
*/
// add a controller
app.controller('DemoCtrl', ['$scope', function($scope){
        /* simple text property */
	$scope.message = "Hello, world!";
        
        /* collection for ng-repeat */
        $scope.developers = [
            {name: "David", title: "Sr. Director" },
            {name: "Ashkan", title: "Lead Developer" },
            {name: "Elizabeth", title: "Front-end Maven"}
        ];
        
        /* Add method will go here */
}]);

app.controller('HomeCtrl', ['$scope', function($scope){
        $scope.message = "Hello, world!";
}]);

app.controller('ListCtrl', ['$scope', function($scope){
        $scope.developers = [
            {name: "David", title: "Sr. Director" },
            {name: "Ashkan", title: "Lead Developer" },
            {name: "Elizabeth", title: "Front-end Maven"}
        ];
}]);