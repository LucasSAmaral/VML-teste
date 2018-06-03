angular.module('vml', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', 
      function($routeProvider, $locationProvider){

        $routeProvider
        .when('/', {
            templateUrl: 'template/home.html',
            controller: 'gitHubController'
        })
        .when('/:name', {
            templateUrl: 'template/repositories.html',
            controller: 'gitHubController'
        });

        $routeProvider.otherwise({redirectTo:"/"});

    }])