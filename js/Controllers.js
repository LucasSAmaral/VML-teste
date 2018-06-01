angular.module('vml')
.controller('gitHubController', function($scope, $http){


    $http.get("https://api.github.com/users/globocom/repos")
        .then(function(response){
            var repoData = response.data;
            $scope.repos = repoData;
        });

        $scope.orderByName = function(n) {
            $scope.orderName = n;
        }
});