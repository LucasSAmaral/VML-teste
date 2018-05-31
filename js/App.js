angular.module('vml', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', 
      function($routeProvider, $locationProvider){

        $routeProvider
        .when('/:name', {
            templateUrl: 'template/repositories.html',
            controller: 'gitHubController'
        })

      }])